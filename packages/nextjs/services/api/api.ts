import { createAxiosByinterceptors } from "./request";

const request = createAxiosByinterceptors({
  //   baseURL: "http://144.202.100.37:9120",
});

export const signin = () => {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjB4NGI1RUY3Y0E1ODBEYjZmOThENzk0QTFiNzhkNTY3NzNCYzgzRjlEMyIsInVzZXJJZCI6MTIsImlhdCI6MTcxNjcwODM5MCwiZXhwIjoxNzE2Nzk0NzkwfQ.406bJk9onFKhljEgvSK-fzIyeR-ERYxSriVHR8515wk"
};
export const getProjectSummary = (): Promise<any> => request.get(`/api/public/projectSummary`);

export const getProjectList = (params: any): Promise<any> =>
  request.get(`/api/public/projectList?page=${params.page}&pageSize=${params.pageSize}&stage=${params.stage}`);
export const getProjectActivityList = (params: any): Promise<any> =>
  request.get(
    `/api/public/projectActivityList?projectId=${params.projectId}&page=${params.page}&pageSize=${params.pageSize}`,
  );

export const getArticleList = (params: any): Promise<any> =>
  request.get(`/api/public/articleList?page=${params.page}&pageSize=${params.pageSize}`);

export const getUserInfo = (): Promise<any> => request.get(`/api/user/info`);

export const getInvestTxList = (params: { page: any; pageSize: any }): Promise<any> =>
  request.get(`/api/user/investTxList?page=${params.page}&pageSize=${params.pageSize}`);

export const getstakeTxList = (params: { page: any; pageSize: any }): Promise<any> =>
  request.get(`/api/user/stakeTxList?page=${params.page}&pageSize=${params.pageSize}`);

export const getunstakeTxList = (params: { page: any; pageSize: any }): Promise<any> =>
  request.get(`/api/user/unstakeTxList?page=${params.page}&pageSize=${params.pageSize}`);

export const getclaimTxList = (params: { page: any; pageSize: any }): Promise<any> =>
  request.get(`/api/user/claimTxList?page=${params.page}&pageSize=${params.pageSize}`);

export const updateUserEmail = (params: any): Promise<any> => request.post(`/api/user/updateUserEmail`, params);
export const userActivityList = (params: any): Promise<any> => request.get(`/api/user/activityList?page=${params.page}&pageSize=${params.pageSize}&projectId=${params.projectId}`);
// 

// project_id
export const getDesktop = (): Promise<any> =>
  request.get(`/api/desktop`);

export const getProjectDetail = (id: any): Promise<any> => request.get(`/api/projects/${id}`);
