import dotenv from 'dotenv';
dotenv.config();
import { test, expect } from '@playwright/test';

test.describe('API Testing', () => {

    //get user list
    test('GET Request - Fetch User Data', async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users?page=2', {
            headers: {
                'x-api-key': process.env.REQRES_API_KEY!
            }
        });

        // Assert the response status code
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.data.length).toBeGreaterThan(0);
    });

    //create a new user
    test('POST Request - Create New User', async ({ request }) => {
        const newUser = {
            name: 'Imran',
            job: 'QA Engineer'
        };

        const response = await request.post('https://reqres.in/api/users', {
            headers: {
                'x-api-key': process.env.REQRES_API_KEY!,
                'Content-Type': 'application/json'
            },
            data: newUser
            
        });

        // Assert the response status code
        const responseBody = await response.json();
        expect(response.status()).toBe(201);
        expect(responseBody.name).toBe(newUser.name);
        expect(responseBody.job).toBe(newUser.job);

    });

    //update user information
    test('PUT Request - Update User Information', async ({ request }) => {
        const updatedUser = {
            name: 'Imran',
            job: 'Senior QA Engineer'
        };

        const response = await request.put('https://reqres.in/api/users/2', {
            headers: {
                'x-api-key': process.env.REQRES_API_KEY!,
                'Content-Type': 'application/json'
            },
            data: updatedUser
        });

        // Assert the response status code
        const responseBody = await response.json();
        expect(response.status()).toBe(200);
        expect(responseBody.name).toBe(updatedUser.name);
        expect(responseBody.job).toBe(updatedUser.job);
    });

    //delete a user
    test('DELETE Request - Delete User', async ({ request }) => {
        const response = await request.delete('https://reqres.in/api/users/2', {
            headers: {
                'x-api-key': process.env.REQRES_API_KEY!
            }
        });

        // Assert the response status code
        expect(response.status()).toBe(204);
    });

});