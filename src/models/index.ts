import Hero from './Hero';
import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const HeroSchema = Hero;

export const heroModel = mongoose.model('Heroes', new Schema(HeroSchema));
