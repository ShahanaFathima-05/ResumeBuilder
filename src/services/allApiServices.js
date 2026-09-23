import apiService from "../api/apiServices";

export const addResumeApi=async(data)=>{
    return await apiService("POST","/allresumes",data)
}

export const getResumeApi=async(id)=>{
    return await apiService("GET",`/allresumes/${id}`,{})
}

export const addDownloadHistoryApi=async(data)=>{
    return await apiService("POST","/downloads",data)
}

export const updateResumeApi = async (id, data) => {
  return await apiService("PUT", `/allresumes/${id}`, data);
}