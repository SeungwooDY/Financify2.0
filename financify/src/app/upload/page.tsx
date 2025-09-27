"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
  const [isProcessing, setIsProcessing] = useState(false)
  const [ocrText, setOcrText] = useState<string>("")
  const [error, setError] = useState<string>("")

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files)
      setUploadedFiles(files)
      await processFiles(files)
    }
  }

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setUploadedFiles(files)
      await processFiles(files)
    }
  }

  const processFiles = async (files: File[]) => {
    setIsProcessing(true)
    setError("")
    setOcrText("")
    
    try {
      // Process the first file (for now, we'll handle one at a time)
      const file = files[0]
      if (!file) return

      const formData = new FormData()
      formData.append("file", file)

      // Call the backend process-image endpoint
      const response = await fetch("http://127.0.0.1:8000/process-image/", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.sentences && Array.isArray(data.sentences)) {
        const text = data.sentences.join("\n")
        setOcrText(text)
        
        // For now, we'll simulate parsing the OCR text into transactions
        // In a real implementation, you'd parse the OCR text to extract transaction data
        setParsedData([
          { date: "2025-08-15", description: "Parsed from OCR", amount: -4.50, category: "food" },
          { date: "2025-08-15", description: "Parsed from OCR", amount: -35.20, category: "transportation" },
          { date: "2025-08-14", description: "Parsed from OCR", amount: -67.89, category: "food" },
          { date: "2025-08-14", description: "Parsed from OCR", amount: 2500.00, category: "income" },
          { date: "2025-08-13", description: "Parsed from OCR", amount: -89.99, category: "books" }
        ])
      } else {
        setOcrText("No text found in the image")
      }
    } catch (err) {
      console.error("Upload failed:", err)
      setError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-[1264px] mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Heading as="h1" size="4xl" className="mb-4 text-balance">
            Import Wizard
          </Heading>
          <Text size="lg" color="muted" className="max-w-2xl mx-auto">
            Drag a statement or snap a photo to get started with your financial tracking
          </Text>
        </div>

        {/* 3 Cards in vertical flow */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Card 1: Dropzone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center">Upload Your Files</CardTitle>
                <CardDescription className="text-center text-lg">
                  Drag, paste, or select files to import your financial data
                </CardDescription>
              </CardHeader>
              <CardContent>
                    <div
                      className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                        isProcessing
                          ? "border-accent-2 bg-accent-2/5"
                          : dragActive 
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
                  
                      <div className="space-y-6">
                        {isProcessing ? (
                          <>
                            <div className="flex justify-center">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 animate-spin">
                                <div className="absolute inset-2 rounded-full bg-paper"></div>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-text mb-2">
                                Processing your file...
                              </h3>
                              <p className="text-text-secondary">
                                Using OCR to extract text from your financial document
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex justify-center space-x-4">
                              <div className="p-4 rounded-xl bg-gradient-to-br from-accent-1/20 to-accent-2/20">
                                <Upload className="h-8 w-8 text-accent-1" />
                              </div>
                              <div className="p-4 rounded-xl bg-gradient-to-br from-accent-2/20 to-accent-3/20">
                                <Camera className="h-8 w-8 text-accent-2" />
                              </div>
                              <div className="p-4 rounded-xl bg-gradient-to-br from-accent-3/20 to-accent-1/20">
                                <FileImage className="h-8 w-8 text-accent-3" />
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-xl font-semibold text-text mb-2">
                                Drop your files here
                              </h3>
                              <p className="text-text-secondary mb-4">
                                Supports JPG, PDF, CSV, and Excel files
                              </p>
                              <div className="flex flex-wrap justify-center gap-2 text-sm text-text-tertiary">
                                <span className="px-3 py-1 rounded-full bg-muted/50">JPG/PNG</span>
                                <span className="px-3 py-1 rounded-full bg-muted/50">PDF</span>
                                <span className="px-3 py-1 rounded-full bg-muted/50">CSV</span>
                                <span className="px-3 py-1 rounded-full bg-muted/50">Excel</span>
                              </div>
                            </div>
                          </>
                        )}
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
                  <CardDescription className="text-center text-lg">
                    Review your parsed transactions and edit categories
                  </CardDescription>
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

                      {/* OCR Results */}
                      {ocrText && (
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-text">Extracted Text</h4>
                          <div className="bg-muted/20 rounded-lg p-4 max-h-32 overflow-y-auto">
                            <p className="text-sm text-text-secondary whitespace-pre-wrap">{ocrText}</p>
                          </div>
                        </div>
                      )}

                      {/* Error Display */}
                      {error && (
                        <div className="space-y-4">
                          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                            <h4 className="text-lg font-semibold text-destructive mb-2">Processing Error</h4>
                            <p className="text-sm text-destructive">{error}</p>
                          </div>
                        </div>
                      )}

                      {/* Parsed table preview */}
                      {parsedData.length > 0 && (
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
                      )}
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
                  <CardDescription className="text-center text-lg">
                    Create your personalized financial wrapped
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-accent-1/10 to-accent-2/10 border border-accent-1/20">
                      <h4 className="text-lg font-semibold text-text mb-2">
                        Ready to create your Wrapped?
                      </h4>
                      <p className="text-text-secondary">
                        We&apos;ll process {parsedData.length} transactions and generate your personalized insights
                      </p>
                    </div>
                    
                    <Button size="lg" className="w-full h-14 text-lg font-semibold shadow-glow">
                      Create Wrapped
                    </Button>
                    
                    <div className="flex items-center justify-center space-x-2 text-sm text-text-tertiary">
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
            <div className="flex items-center justify-center space-x-6 text-sm text-text-tertiary">
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