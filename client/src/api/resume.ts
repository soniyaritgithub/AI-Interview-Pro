import API from "./api";
import { parseApiError } from "./errorHandler";

/* -------------------------------------------------------------------------- */
/*                                  TYPES                                     */
/* -------------------------------------------------------------------------- */

export interface RequestOptions {
  signal?: AbortSignal;
}

export interface Resume {
  id: number;
  file: string;
  original_filename: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface ResumeHistoryResponse {
  count: number;
  results: Resume[];
}

export interface ResumeAnalysis {
  id: number;
  ats_score: number;
  overall_score: number;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  summary: string;
}

export interface DashboardStatistics {
  total_resumes: number;
  analyzed_resumes: number;
  average_ats_score: number;
}

/* -------------------------------------------------------------------------- */
/*                               UPLOAD                                       */
/* -------------------------------------------------------------------------- */

export async function uploadResume(
  file: File,
  options?: RequestOptions
): Promise<Resume> {
  try {
    const formData = new FormData();

    formData.append("file", file);

    const { data } = await API.post<Resume>(
      "/resume/upload/",
      formData,
      {
        signal: options?.signal,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  } catch (error) {
    throw parseApiError(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                              HISTORY                                       */
/* -------------------------------------------------------------------------- */

export async function getResumeHistory(
  options?: RequestOptions
): Promise<ResumeHistoryResponse> {
  try {
    const { data } =
      await API.get<ResumeHistoryResponse>(
        "/resume/history/",
        {
          signal: options?.signal,
        }
      );

    return data;
  } catch (error) {
    throw parseApiError(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                               DETAIL                                       */
/* -------------------------------------------------------------------------- */

export async function getResumeDetail(
  resumeId: number,
  options?: RequestOptions
): Promise<ResumeAnalysis> {
  try {
    const { data } =
      await API.get<ResumeAnalysis>(
        `/resume/${resumeId}/`,
        {
          signal: options?.signal,
        }
      );

    return data;
  } catch (error) {
    throw parseApiError(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                              ANALYZE                                       */
/* -------------------------------------------------------------------------- */

export async function analyzeResume(
  resumeId: number,
  options?: RequestOptions
): Promise<ResumeAnalysis> {
  try {
    const { data } =
      await API.post<ResumeAnalysis>(
        `/resume/analyze/${resumeId}/`,
        {},
        {
          signal: options?.signal,
        }
      );

    return data;
  } catch (error) {
    throw parseApiError(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                             REANALYZE                                      */
/* -------------------------------------------------------------------------- */

export async function reanalyzeResume(
  resumeId: number,
  options?: RequestOptions
): Promise<ResumeAnalysis> {
  try {
    const { data } =
      await API.post<ResumeAnalysis>(
        `/resume/${resumeId}/reanalyze/`,
        {},
        {
          signal: options?.signal,
        }
      );

    return data;
  } catch (error) {
    throw parseApiError(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                               DELETE                                       */
/* -------------------------------------------------------------------------- */

export async function deleteResume(
  resumeId: number,
  options?: RequestOptions
): Promise<void> {
  try {
    await API.delete(
      `/resume/${resumeId}/delete/`,
      {
        signal: options?.signal,
      }
    );
  } catch (error) {
    throw parseApiError(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                             DOWNLOAD PDF                                   */
/* -------------------------------------------------------------------------- */

export async function downloadResumeReport(
  resumeId: number,
  options?: RequestOptions
): Promise<Blob> {
  try {
    const { data } =
      await API.get(
        `/resume/${resumeId}/download/`,
        {
          responseType: "blob",
          signal: options?.signal,
        }
      );

    return data;
  } catch (error) {
    throw parseApiError(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                             DASHBOARD                                      */
/* -------------------------------------------------------------------------- */

export async function getDashboardStatistics(
  options?: RequestOptions
): Promise<DashboardStatistics> {
  try {
    const { data } =
      await API.get<DashboardStatistics>(
        "/resume/dashboard/",
        {
          signal: options?.signal,
        }
      );

    return data;
  } catch (error) {
    throw parseApiError(error);
  }
}