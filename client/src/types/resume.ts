export interface ATSScore {
  overall: number;

  keywords: number;

  formatting: number;

  readability: number;

  skills: number;

  experience: number;

  education: number;
}

export interface ResumeAnalysis {
  id: string;

  resumeId: string;

  atsScore: ATSScore;

  strengths: string[];

  weaknesses: string[];

  missingKeywords: string[];

  suggestions: string[];

  analyzedAt: string;
}
export interface Resume {
  id: string;

  fileName: string;

  originalFileName: string;

  fileSize: number;

  fileType: string;

  uploadedAt: string;

  updatedAt: string;

  status:
    | "Uploaded"
    | "Processing"
    | "Completed"
    | "Failed";

  atsScore?: number;

  analysis?: ResumeAnalysis;
}
export interface Pagination {
  page: number;

  limit: number;

  total: number;

  totalPages: number;

  hasNext: boolean;

  hasPrevious: boolean;
}
export interface ResumeHistoryResponse {
  results: Resume[];

  pagination: Pagination;
}
export interface UploadResumeResponse {
  message: string;

  resume: Resume;
}
export interface DeleteResumeResponse {
  message: string;
}
export interface RetryAnalysisResponse {
  message: string;

  analysis: ResumeAnalysis;
}
export interface DownloadResumeResponse {
  file: Blob;

  fileName: string;
}
export interface UploadProgress {
  loaded: number;

  total: number;

  percentage: number;
}

/* ==========================================
   Resume Upload
========================================== */


/* ==========================================
   ATS Analysis
========================================== */


/* ==========================================
   Upload Error
========================================== */



/* ==========================================
   Upload Progress
========================================== */
