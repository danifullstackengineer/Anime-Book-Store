export default interface IQueryResult {
  success: boolean;
  message: string;
  data?: { username?: string; password?: string, code?: number };
}
