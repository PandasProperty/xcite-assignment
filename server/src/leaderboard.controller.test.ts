import { Request, Response } from 'express';
import { getLeaderboard } from './leaderboard.controller';
import * as services from './services';
import { User } from './types';

const mockRequest = null as any as Request;
const mockResponseSend = jest.fn();
const mockResponseStatus = jest.fn().mockReturnValue({
  send: mockResponseSend,
});
const mockResponse = {
  send: mockResponseSend,
  status: mockResponseStatus,
} as any as Response;

describe('leaderboard.controller', () => {
  it('return status code 500 and error message', async () => {
    const mockFetchUsers = jest.fn().mockImplementation(() => {
      throw new Error('Some error.');
    });
    const spyOnFetchUsers = jest.spyOn(services, 'fetchUsers');
    spyOnFetchUsers.mockImplementation(mockFetchUsers);
    
    await getLeaderboard(mockRequest, mockResponse);
    expect(mockResponseStatus).toHaveBeenCalledWith(500);
    expect(mockResponseSend).toHaveBeenCalledWith({
      message: 'Some error.'
    });
  });

  it('returns first 10 users by wins sorted descending', async () => {
    const mockUsers: User[] = Array(20).fill('').map((_, index) => ({
      id: index,
      name: `${index}`,
      username: `${index}`,
      email: `${index}`,
      city: `${index}`,
      wins: index,
    }));
    const spyOnFetchUsers = jest.spyOn(services, 'fetchUsers');
    spyOnFetchUsers.mockImplementation(() => new Promise(
      (resolve) => resolve(mockUsers)
    ));
    
    await getLeaderboard(mockRequest, mockResponse);

    const result: User[] = Array(10).fill('').map((_, index) => {
      index = 19 - index;
      return ({
        id: index,
        name: `${index}`,
        username: `${index}`,
        email: `${index}`,
        city: `${index}`,
        wins: index,
      });
    });
    expect(mockResponseSend).toHaveBeenCalledWith(result);
  });
});
