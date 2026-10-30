import orm from './orm-tejarat-bank'
import tejarat from './tejarat-internet-bank'
import docsplain from './docsplain-ai-doctor'
import ghabz24 from './ghabz-24'
import pg from './pg-payment-gateway'
import spay from './spay'
import earthlyHerbs from './earthly-herbs'

export const works = [tejarat, docsplain, orm, ghabz24, pg, spay, earthlyHerbs]
export const getWork = (slug: string) => works.find((w) => w.slug === slug)
