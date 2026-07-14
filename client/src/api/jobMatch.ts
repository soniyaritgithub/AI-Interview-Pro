import API from "./api";
import { parseApiError } from "./errorHandler";

/* -------------------------------------------------------------------------- */
/*                                  TYPES                                     */
/* -------------------------------------------------------------------------- */

export interface RequestOptions {
  signal?: AbortSignal;
}

export interface JobMatchRequest {
  resume_id: number;
  job_description: string;
}

export interface JobMatchResponse {
  match_score: number;
  missing_keywords: string[];
  missing_skills: string[];
  strengths: string[];
  suggestions: string[];
  summary: string;
}

/* -------------------------------------------------------------------------- */
/*                              JOB MATCH                                     */
/* -------------------------------------------------------------------------- */

export async function matchResume(
  payload: JobMatchRequest,
  options?: RequestOptions
): Promise<JobMatchResponse> {
  try {
    const { data } =
      await API.post<JobMatchResponse>(
        "/resume/match/",
        payload,
        {
          signal: options?.signal,
        }
      );

    return data;
  } catch (error) {
    throw parseApiError(error);
  }
}