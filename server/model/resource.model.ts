import { NewResourceParams, insertResourceSchema, resources } from '../schema/resources';
import db from '../config/database';
import { generateEmbeddings } from '../lib/ai/embedding';
import { embeddings as embeddingsTable } from '../schema/embeddings';
import { AppError } from '../lib/appError';
import logger from '../config/logger';

export const createResource = async (input: NewResourceParams) => {
  try {
    const { content } = insertResourceSchema.parse(input);

    const [resource] = await db
      .insert(resources)
      .values({ content })
      .returning();

    const embeddings = await generateEmbeddings(content);
    await db.insert(embeddingsTable).values(
      embeddings.map(embedding => ({
        resourceId: resource.id,
        ...embedding,
      })),
    );

    return 'Resource successfully created and embedded.';
  } catch (error: any) {
    // if (e instanceof Error)
    //   return e.message.length > 0 ? e.message : 'Error, please try again.';
    logger.error(error)
    throw new AppError(
      "someting went wrong",
      500,
      error,
      true
    )
  }
};