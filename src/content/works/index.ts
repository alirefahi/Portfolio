import one from './case-study-one'
import two from './case-study-two'
import three from './case-study-three'
import four from './case-study-four'
import five from './case-study-five'
import six from './case-study-six'

export const works = [one, two, three, four, five, six]
export const getWork = (slug: string) => works.find((w) => w.slug === slug)
