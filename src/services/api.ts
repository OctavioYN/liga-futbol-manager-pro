
const API_BASE_URL = 'http://localhost:3001/api';

class ApiService {
  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  }

  // Teams API
  async getTeams() {
    return this.request('/teams');
  }

  async createTeam(teamData: any) {
    return this.request('/teams', {
      method: 'POST',
      body: JSON.stringify(teamData),
    });
  }

  async updateTeam(id: number, teamData: any) {
    return this.request(`/teams/${id}`, {
      method: 'PUT',
      body: JSON.stringify(teamData),
    });
  }

  async deleteTeam(id: number) {
    return this.request(`/teams/${id}`, {
      method: 'DELETE',
    });
  }

  // Referees API
  async getReferees() {
    return this.request('/referees');
  }

  async createReferee(refereeData: any) {
    return this.request('/referees', {
      method: 'POST',
      body: JSON.stringify(refereeData),
    });
  }

  async updateReferee(id: number, refereeData: any) {
    return this.request(`/referees/${id}`, {
      method: 'PUT',
      body: JSON.stringify(refereeData),
    });
  }

  async deleteReferee(id: number) {
    return this.request(`/referees/${id}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService();
