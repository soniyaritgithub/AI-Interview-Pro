import api from "../lib/axios";
import type {
  AxiosProgressEvent,
} from "axios";

import type {
  Resume,
  ResumeAnalysis,
  ResumeHistoryResponse,
} from "../types/resume";
export type UploadProgressCallback = (
  progress: number
) => void;


const ENDPOINTS = {
  upload: "/resume/upload/",
  history: "/resume/history/",
  dashboard: "/resume/dashboard/",
  match: "/resume/match/",
  details: "/resume",
  delete: "/resume",
  download: "/resume",
} as const;
const resumeService = {
    
    async uploadResume(
  file: File,
  onProgress?: UploadProgressCallback
): Promise<Resume> {
  const formData = new FormData();

  formData.append("title", file.name);
  formData.append("file", file);

  const { data } = await api.post(
    ENDPOINTS.upload,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },

      onUploadProgress: (
        progressEvent: AxiosProgressEvent
      ) => {
        if (!progressEvent.total) return;

        const percentage = Math.round(
          (progressEvent.loaded * 100) /
            progressEvent.total
        );

        onProgress?.(percentage);
      },
    }
  );

  console.log("Upload Response:", data);

  // Backend returns:
  // {
  //   success: true,
  //   message: "...",
  //   data: { ...resume }
  // }

  return data.data;
},

async analyzeResume(
  resumeId: string
): Promise<ResumeAnalysis> {
  const { data } =
    await api.post<ResumeAnalysis>(
  `/resume/analyze/${resumeId}/`
);

  return data;
},

async getResumeHistory(): Promise<ResumeHistoryResponse> {
  const { data } =
    await api.get<ResumeHistoryResponse>(
      ENDPOINTS.history
    );

  return data;
},
async getResume(
  resumeId: string
): Promise<Resume> {
  const { data } =
    await api.get<Resume>(
      `${ENDPOINTS.details}/${resumeId}/`
    );

  return data;
},
async deleteResume(
  resumeId: string
): Promise<void> {
  await api.delete(
    `${ENDPOINTS.delete}/${resumeId}/delete/`
  );
},
async downloadResume(
  resumeId: string
): Promise<Blob> {
  const { data } =
    await api.get(
      `${ENDPOINTS.download}/${resumeId}/download/`,
      {
        responseType: "blob",
      }
    );

  return data;
},
async retryAnalysis(
  resumeId: string
): Promise<ResumeAnalysis> {
  const { data } =
    await api.post<ResumeAnalysis>(
     `/resume/${resumeId}/reanalyze/`
    );

  return data;
},
async getResumeHistoryPaginated(
  page = 1,
  limit = 10
): Promise<ResumeHistoryResponse> {
  const { data } =
    await api.get<ResumeHistoryResponse>(
      ENDPOINTS.history,
      {
        params: {
          page,
          limit,
        },
      }
    );

  return data;
},
};
export default resumeService;