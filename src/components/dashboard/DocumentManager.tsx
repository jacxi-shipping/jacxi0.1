'use client';

import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  ListItemSecondaryAction, 
  IconButton,
  Button,
  Chip,
  Divider
} from '@mui/material';
import { 
  FileText, 
  Download, 
  Trash2, 
  Upload, 
  Image as ImageIcon, 
  FileCheck,
  MoreVertical
} from 'lucide-react';
import { Modal, FormField, Select, toast } from '@/components/design-system';

interface Document {
  id: string;
  name: string;
  type: string;
  category: string;
  size: number;
  uploadedBy: string;
  createdAt: string;
  url: string;
}

interface DocumentManagerProps {
  documents: Document[];
  entityId: string;
  entityType: 'shipment' | 'container';
  readOnly?: boolean;
}

export function DocumentManager({ documents: initialDocs, entityId, entityType, readOnly = false }: DocumentManagerProps) {
  const [documents, setDocuments] = useState<Document[]>(initialDocs);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [uploadState, setUploadState] = useState({
    file: null as File | null,
    category: 'OTHER',
    name: ''
  });

  const handleUpload = async () => {
    if (!uploadState.file) return;

    // Simulate upload
    toast.success('Uploading document...');
    
    // In a real app, you'd upload to S3/Blob storage here
    // const formData = new FormData();
    // formData.append('file', uploadState.file);
    // ...
    
    // Mock adding to list
    const newDoc: Document = {
      id: Math.random().toString(36).substr(2, 9),
      name: uploadState.name || uploadState.file.name,
      type: uploadState.file.type,
      category: uploadState.category,
      size: uploadState.file.size,
      uploadedBy: 'You',
      createdAt: new Date().toISOString(),
      url: '#'
    };

    setTimeout(() => {
      setDocuments([newDoc, ...documents]);
      setIsUploadOpen(false);
      setUploadState({ file: null, category: 'OTHER', name: '' });
      toast.success('Document uploaded successfully');
    }, 1500);
  };

  const getIcon = (type: string) => {
    if (type.includes('image')) return <ImageIcon className="w-5 h-5 text-blue-500" />;
    if (type.includes('pdf')) return <FileText className="w-5 h-5 text-red-500" />;
    return <FileText className="w-5 h-5 text-gray-500" />;
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Documents
        </Typography>
        {!readOnly && (
          <Button
            variant="contained"
            startIcon={<Upload size={18} />}
            onClick={() => setIsUploadOpen(true)}
            sx={{
                bgcolor: 'var(--accent-gold)',
                color: 'var(--background)',
                '&:hover': { bgcolor: 'var(--accent-gold-hover)' }
            }}
          >
            Upload
          </Button>
        )}
      </Box>

      {documents.length === 0 ? (
        <Paper 
          variant="outlined" 
          sx={{ 
            p: 4, 
            textAlign: 'center', 
            bgcolor: 'var(--background)',
            borderStyle: 'dashed' 
          }}
        >
          <FileText className="w-12 h-12 text-[var(--text-secondary)] mx-auto mb-2 opacity-50" />
          <Typography color="textSecondary">
            No documents attached yet
          </Typography>
        </Paper>
      ) : (
        <List sx={{ bgcolor: 'var(--panel)', borderRadius: 2, border: '1px solid var(--border)' }}>
          {documents.map((doc, index) => (
            <div key={doc.id}>
              <ListItem>
                <ListItemIcon>
                  {getIcon(doc.type)}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                            {doc.name}
                        </Typography>
                        <Chip 
                            label={doc.category.replace('_', ' ')} 
                            size="small" 
                            sx={{ fontSize: '0.65rem', height: 20 }} 
                        />
                    </Box>
                  }
                  secondary={
                    <Typography variant="caption" color="textSecondary">
                      {formatSize(doc.size)} • Uploaded by {doc.uploadedBy} • {new Date(doc.createdAt).toLocaleDateString()}
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="download" sx={{ mr: 1 }}>
                    <Download className="w-4 h-4" />
                  </IconButton>
                  {!readOnly && (
                    <IconButton edge="end" aria-label="delete" color="error">
                        <Trash2 className="w-4 h-4" />
                    </IconButton>
                  )}
                </ListItemSecondaryAction>
              </ListItem>
              {index < documents.length - 1 && <Divider component="li" />}
            </div>
          ))}
        </List>
      )}

      {/* Upload Modal */}
      <Modal
        open={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        title="Upload Document"
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box 
                sx={{ 
                    border: '2px dashed var(--border)', 
                    borderRadius: 2, 
                    p: 4, 
                    textAlign: 'center',
                    cursor: 'pointer',
                    bgcolor: uploadState.file ? 'rgba(var(--accent-gold-rgb), 0.1)' : 'transparent',
                    '&:hover': {
                        borderColor: 'var(--accent-gold)'
                    }
                }}
                onClick={() => document.getElementById('file-upload')?.click()}
            >
                <input 
                    type="file" 
                    id="file-upload" 
                    hidden 
                    onChange={(e) => setUploadState({ ...uploadState, file: e.target.files?.[0] || null })}
                />
                <Upload className="w-10 h-10 mx-auto mb-2 text-[var(--text-secondary)]" />
                <Typography>
                    {uploadState.file ? uploadState.file.name : 'Click to select a file'}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                    PDF, JPG, PNG up to 10MB
                </Typography>
            </Box>

            <FormField label="Document Name">
                <input 
                    className="w-full p-2 rounded-md border border-[var(--border)] bg-[var(--background)] text-[var(--text-primary)]"
                    placeholder="e.g. Bill of Lading"
                    value={uploadState.name}
                    onChange={(e) => setUploadState({ ...uploadState, name: e.target.value })}
                />
            </FormField>

            <FormField label="Category">
                <Select
                    label="Category"
                    value={uploadState.category}
                    onChange={(e) => setUploadState({ ...uploadState, category: String(e) })}
                    options={[
                        { value: 'INVOICE', label: 'Invoice' },
                        { value: 'BILL_OF_LADING', label: 'Bill of Lading' },
                        { value: 'CUSTOMS', label: 'Customs' },
                        { value: 'INSURANCE', label: 'Insurance' },
                        { value: 'PHOTO', label: 'Photo' },
                        { value: 'OTHER', label: 'Other' },
                    ]}
                />
            </FormField>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                <Button onClick={() => setIsUploadOpen(false)} sx={{ color: 'var(--text-secondary)' }}>
                    Cancel
                </Button>
                <Button 
                    variant="contained" 
                    onClick={handleUpload}
                    disabled={!uploadState.file}
                    sx={{
                        bgcolor: 'var(--accent-gold)',
                        color: 'var(--background)',
                        '&:hover': { bgcolor: 'var(--accent-gold-hover)' }
                    }}
                >
                    Upload
                </Button>
            </Box>
        </Box>
      </Modal>
    </Box>
  );
}

