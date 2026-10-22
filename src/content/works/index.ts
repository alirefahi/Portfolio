import orm from './orm-tejarat-bank'
import tejarat from './tejarat-internet-bank'
import two from './case-study-two'
import three from './case-study-three'
import four from './case-study-four'
import five from './case-study-five'
import six from './case-study-six'

export const works = [orm, tejarat, two, three, four, five, six]
export const getWork = (slug: string) => works.find((w) => w.slug === slug)
