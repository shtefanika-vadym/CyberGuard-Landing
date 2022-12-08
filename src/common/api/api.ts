import axios from "axios"
import { AuthService } from "../services/auth-service"

const getArticles = async () => {
    try {
      const data = await axios({
        method: 'get',
        headers: {
          authorization: `Bearer ${AuthService.getToken()}`,
          accept: 'application/json',
        },
        url: 'https://cyberguard-api.azurewebsites.net/articles',
      })
      return data
    } catch (error) {
      return error.message
    }
  }

const getBlacklist = async () => {
    try {
      const data = await axios({
        method: 'get',
        headers: {
          authorization: `Bearer ${AuthService.getToken()}`,
          accept: 'application/json',
        },
        url: 'https://cyberguard-api.azurewebsites.net/sites',
      })
      return data
    } catch (error) {
      return error.message
    }
  }

  
export const MainAPI = {
    getArticles,
    getBlacklist,
}