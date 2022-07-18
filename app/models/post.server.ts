import type { Post } from '@prisma/client';
import { prisma } from '~/db.server'

export type { Post } from '@prisma/client'

export async function getPosts() {
    return prisma.post.findMany();
}

export async function getPost(slug:string) {
    return prisma.post.findUnique({ where: { slug } });
}

export async function getTest() {
    return prisma.test.findMany();
}

export async function getTestC() {
    return prisma.testC.findMany();
}

export async function createPost(post: Pick<Post, 'slug'|'title'|'markdown'>) {
    return prisma.post.create({
        data: post
    })
}