"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Heading, Text } from "@/components/ui/typography"
import { Upload, FileText, CheckCircle, Camera, FileImage, Shield, Lock } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function UploadPage() {
  const [dragActive, setDragActive] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [parsedData, setParsedData] = useState<Array<{
    date: string;
    description: string;
    amount: number;
    category: string;
  }>>([])

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files)
      setUploadedFiles(files)
      // Simulate parsing
      if (files.length > 0) {
        setParsedData([
          { date: "2025-08-15", description: "Coffee Shop", amount: -4.50, category: "food" },
          { date: "2025-08-15", description: "Gas Station", amount: -35.20, category: "transportation" },
          { date: "2025-08-14", description: "Grocery Store", amount: -67.89, category: "food" },
          { date: "2025-08-14", description: "Salary", amount: 2500.00, category: "income" },
          { date: "2025-08-13", description: "Textbook", amount: -89.99, category: "books" }
        ])
      }
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setUploadedFiles(files)
      // Simulate parsing
      if (files.length > 0) {
        setParsedData([
          { date: "2025-08-15", description: "Coffee Shop", amount: -4.50, category: "food" },
          { date: "2025-08-15", description: "Gas Station", amount: -35.20, category: "transportation" },
          { date: "2025-08-14", description: "Grocery Store", amount: -67.89, category: "food" },
          { date: "2025-08-14", description: "Salary", amount: 2500.00, category: "income" },
          { date: "2025-08-13", description: "Textbook", amount: -89.99, category: "books" }
        ])
      }
    }
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-[1600px] mx-auto px-12 py-20">
        {/* Header */}
        <div className="mb-12" style={{ textAlign: 'center' }}>
          <Heading as="h1" size="4xl" balance={false} className="mb-6">
            Import Wizard
          </Heading>
          <p className="text-lg text-muted-foreground max-w-7xl mx-auto leading-relaxed px-4" style={{ 
            whiteSpace: 'normal', 
            wordBreak: 'normal', 
            overflowWrap: 'break-word',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            Drag a statement or snap a photo to get started with your financial tracking. 
            Our intelligent system will automatically parse your transactions and categorize them for you. 
            Simply upload your bank statements, receipts, or CSV files and watch as we transform your raw financial data into beautiful, actionable insights.
          </p>
        </div>

        {/* 3 Cards in vertical flow */}
        <div className="space-y-8 max-w-8xl mx-auto">
          {/* Card 1: Dropzone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center">Upload Your Files</CardTitle>
                <p className="text-lg text-muted-foreground max-w-7xl mx-auto leading-relaxed px-4" style={{ 
                  whiteSpace: 'normal', 
                  wordBreak: 'normal', 
                  overflowWrap: 'break-word',
                  lineHeight: '1.6',
                  textAlign: 'center'
                }}>
                  Drag, paste, or select files to import your financial data. 
                  We support JPG, PNG, PDF, CSV, and Excel files for seamless data import. 
                  Our advanced OCR technology can even read text from photos of receipts and statements.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Camera Section */}
                  <div
                    className="relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 hover:border-accent-2/50 hover:bg-accent-2/5 cursor-pointer group"
                    onClick={() => {
                      // Access camera functionality
                      navigator.mediaDevices.getUserMedia({ video: true })
                        .then(stream => {
                          // Camera access granted - you can implement camera UI here
                          console.log('Camera access granted');
                          // For now, just show an alert
                          alert('Camera access granted! Camera functionality will be implemented here.');
                        })
                        .catch(err => {
                          console.error('Camera access denied:', err);
                          alert('Camera access is required to take photos of receipts.');
                        });
                    }}
                  >
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-accent-2/20 to-accent-3/20 group-hover:scale-110 transition-transform duration-300">
                          <Camera className="h-12 w-12 text-accent-2" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-text mb-2">
                          Take Photo
                        </h3>
                        <p className="text-text-secondary leading-relaxed" style={{ 
                          wordWrap: 'normal', 
                          overflowWrap: 'break-word',
                          whiteSpace: 'normal',
                          wordBreak: 'normal',
                          lineHeight: '1.6'
                        }}>
                          Snap a photo of your receipt or statement using your device&apos;s camera
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* File Upload Section */}
                  <div
                    className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                      dragActive 
                        ? "border-accent-1 bg-accent-1/5 scale-[1.02]" 
                        : "border-white/20 hover:border-accent-1/50 hover:bg-accent-1/5"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      multiple
                      accept=".csv,.xlsx,.xls,.pdf,.jpg,.jpeg,.png"
                      onChange={handleFileInput}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-accent-1/20 to-accent-2/20 group-hover:scale-110 transition-transform duration-300">
                          <Upload className="h-12 w-12 text-accent-1" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-text mb-2">
                          Upload Files
                        </h3>
                        <p className="text-text-secondary leading-relaxed mb-4" style={{ 
                          wordWrap: 'normal', 
                          overflowWrap: 'break-word',
                          whiteSpace: 'normal',
                          wordBreak: 'normal',
                          lineHeight: '1.6'
                        }}>
                          Drag and drop files or click to browse and select multiple files
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-sm text-text-tertiary">
                          <span className="px-3 py-1 rounded-full bg-muted/50">JPG/PNG</span>
                          <span className="px-3 py-1 rounded-full bg-muted/50">PDF</span>
                          <span className="px-3 py-1 rounded-full bg-muted/50">CSV</span>
                          <span className="px-3 py-1 rounded-full bg-muted/50">Excel</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: Preview & Parse */}
          {uploadedFiles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-center">Preview & Parse</CardTitle>
                  <p className="text-lg text-muted-foreground max-w-8xl mx-auto leading-relaxed px-4" style={{ 
                    whiteSpace: 'normal', 
                    wordBreak: 'normal', 
                    overflowWrap: 'break-word',
                    lineHeight: '1.7',
                    textAlign: 'center'
                  }}>
                    Review your parsed transactions and edit categories as needed. 
                    Our AI will automatically categorize your spending patterns for better insights. 
                    You can manually adjust any categorization before generating your personalized financial wrapped.
                  </p>
                </CardHeader>
                <CardContent>
                  {/* File thumbnails */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-muted/30 border border-white/10">
                        <FileText className="h-5 w-5 text-accent-1" />
                        <div>
                          <p className="text-sm font-medium text-text truncate max-w-[200px]" title={file.name}>
                            {file.name}
                          </p>
                          <p className="text-xs text-text-tertiary">
                            {(file.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                        <CheckCircle className="h-5 w-5 text-success" />
                      </div>
                    ))}
                  </div>

                  {/* Parsed table preview */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-text">Parsed Transactions</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">Date</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">Description</th>
                            <th className="text-right py-3 px-4 text-sm font-medium text-text-tertiary">Amount</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">Category</th>
                          </tr>
                        </thead>
                        <tbody>
                          {parsedData.slice(0, 3).map((transaction, index) => (
                            <tr key={index} className="border-b border-white/5 hover:bg-muted/20">
                              <td className="py-3 px-4 text-sm text-text">
                                {new Date(transaction.date).toLocaleDateString()}
                              </td>
                              <td className="py-3 px-4 text-sm text-text truncate max-w-[200px]">
                                {transaction.description}
                              </td>
                              <td className={`py-3 px-4 text-sm font-semibold tabular-nums text-right ${
                                transaction.amount > 0 ? 'text-success' : 'text-destructive'
                              }`}>
                                {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                              </td>
                              <td className="py-3 px-4 text-sm">
                                <span className="px-2 py-1 rounded-full bg-accent-1/20 text-accent-1 text-xs capitalize">
                                  {transaction.category}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {parsedData.length > 3 && (
                      <p className="text-sm text-text-tertiary text-center">
                        ... and {parsedData.length - 3} more transactions
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Card 3: Confirm & Generate */}
          {uploadedFiles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-center">Confirm & Generate</CardTitle>
                  <p className="text-lg text-muted-foreground max-w-8xl mx-auto leading-relaxed px-4" style={{ 
                    whiteSpace: 'normal', 
                    wordBreak: 'normal', 
                    overflowWrap: 'break-word',
                    lineHeight: '1.6',
                    textAlign: 'center'
                  }}>
                    Create your personalized financial wrapped with beautiful visualizations. 
                    Get insights into your spending habits, top merchants, and financial trends. 
                    Share your financial journey with stunning charts and personalized recommendations.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-accent-1/10 to-accent-2/10 border border-accent-1/20">
                      <h4 className="text-lg font-semibold text-text mb-2">
                        Ready to create your Wrapped?
                      </h4>
                      <p className="text-text-secondary leading-relaxed max-w-8xl mx-auto">
                        We&apos;ll process {parsedData.length} transactions and generate your personalized insights. 
                        This includes spending analysis, category breakdowns, trend identification, and personalized recommendations.
                      </p>
                    </div>
                    
                    <Button size="lg" className="w-full h-14 text-lg font-semibold shadow-glow">
                      Create Wrapped
                    </Button>
                    
                    <div className="flex items-center justify-center space-x-2 text-sm text-text-tertiary leading-relaxed">
                      <Shield className="h-4 w-4" />
                      <span>Files are processed locally and securely</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Trust & Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-6 text-sm text-text-tertiary leading-relaxed">
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4" />
                <span>Account numbers are redacted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Data never leaves your device</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}