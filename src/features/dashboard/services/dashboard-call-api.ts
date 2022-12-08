import axios from "axios"
import { AuthService } from "../../../common/services/auth-service"

const getStatistics = async () => {
    try {
      const data = await axios({
        method: 'get',
        headers: {
          authorization: `Bearer ${AuthService.getToken()}`,
          accept: 'application/json',
        },
        url: 'https://cyberguard-api.azurewebsites.net/dashboard/statistics',
      })
      return data
    } catch (error) {
      return error.message
    }
  }

  const getTrustedSite = async () => {
    try {
      const data = await axios({
        method: 'get',
        headers: {
          authorization: `Bearer ${AuthService.getToken()}`,
          accept: 'application/json',
        },
        url: 'https://cyberguard-api.azurewebsites.net/dashboard/most-trusted-sites',
      })
      return data
    } catch (error) {
      return error.message
    }
  }

  const getVulnerableSite = async () => {
    try {
      const data = await axios({
        method: 'get',
        headers: {
          authorization: `Bearer ${AuthService.getToken()}`,
          accept: 'application/json',
        },
        url: 'https://cyberguard-api.azurewebsites.net/dashboard/most-vulnerable-sites',
      })
      return data
    } catch (error) {
      return error.message
    }
  }

  const getAnalysesSummary = async () => {
    try {
      const data = await axios({
        method: 'get',
        headers: {
          authorization: `Bearer ${AuthService.getToken()}`,
          accept: 'application/json',
        },
        url: 'https://cyberguard-api.azurewebsites.net/dashboard/analyses-summary',
      })
      return data
    } catch (error) {
      return error.message
    }
  }

  export const TaskManagerAPI = {
    getStatistics,
    getTrustedSite,
    getVulnerableSite,
    getAnalysesSummary,
  }