/**
 * 
 */
import { test, before, after, describe } from 'node:test';
import assert from 'node:assert';
import request from 'supertest';
import fs from 'fs/promises';
import app from '../index.js';

describe('Vercel Telex Integration', () => {
    let server;
    // before(async () => {
    //     server = app.listen(3000);
    // });

    after(async () => { // close the process after all tests 
        setTimeout(() => process.exit(), 1000); // a short delay to ensure all pending operations are completed 
    });
    test('POST /api/integration', async () => {
        const response = await request(app)
            .post('/api/integration')
            .expect('Content-Type', /json/)
            // .expect(200);
        // assert(Array.isArray(response.body.data));
    });
});