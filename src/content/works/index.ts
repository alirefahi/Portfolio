import orm from './orm-tejarat-bank'
import tejarat from './tejarat-internet-bank'
import docsplain from './docsplain-ai-doctor'
import three from './case-study-three'
import four from './case-study-four'
import five from './case-study-five'
import six from './case-study-six'

export const works = [tejarat, docsplain, orm, three, four, five, six]
export const getWork = (slug: string) => works.find((w) => w.slug === slug)
