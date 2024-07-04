// Write your code here
import {useState} from 'react'

import {
  Container,
  Heading,
  Description,
  Image,
  ReadMoreButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const text = reactHooksDescription
  const slicedText = reactHooksDescription.slice(0, 170)

  const [showButtonStatus, setShowButtonStatus] = useState(false)
  const [readMore, setReadMore] = useState(slicedText)

  const onClickReadMore = () => {
    setShowButtonStatus(prevShowButtonStatus => !prevShowButtonStatus)
    setReadMore(text)
  }

  const onClickReadLess = () => {
    setShowButtonStatus(prevShowButtonStatus => !prevShowButtonStatus)
    setReadMore(slicedText)
  }

  return (
    <Container>
      <Heading>React Hooks</Heading>
      <Description>Hooks are a new addition to React</Description>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{readMore}</Description>
      {showButtonStatus ? (
        <ReadMoreButton type="button" onClick={onClickReadLess}>
          Read Less
        </ReadMoreButton>
      ) : (
        <ReadMoreButton type="button" onClick={onClickReadMore}>
          Read More
        </ReadMoreButton>
      )}
    </Container>
  )
}

export default ReadMore
