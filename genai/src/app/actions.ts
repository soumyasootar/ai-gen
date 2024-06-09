"use server"

import { createOpenAI } from '@ai-sdk/openai';
import { generateObject, generateText } from 'ai';
import { z } from 'zod';

const groq = createOpenAI({
    baseURL: 'https://api.groq.com/openai/v1',
    apiKey: process.env.GROQ_API_KEY,
});

export async function getBio(input: string ,temperature: number,model: string) {
    'use server';
    const { object: data } = await generateObject({
        model: groq(model),
        system: 'You generate three data for a messages app.',
        prompt: input,
        maxTokens: 1024,
        temperature: temperature,
        schema: z.object({
            data: z.array(
                z.object({
                    name: z.string().describe('Add Generated Bio Here.'),
                }),
            ),
        }),
    });

    return { data };
}