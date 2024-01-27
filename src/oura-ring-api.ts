import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const headers = {
  Authorization: `Bearer ${process.env.OURA_RING_ACCESS_TOKEN}`,
};

export class OuraRingApiClass {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "https://api.ouraring.com/v2/usercollection/";
  }

  public async getSleepSummary() {
    try {
      const response = await axios.get(
        `${this.baseUrl}daily_sleep?start_date=2024-01-01&end_date=2024-01-02`,
        { headers: headers }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}
