import React from 'react'
import {
 Html,
 Body,
 Head,
 Heading,
 Hr,
 Container,
 Preview,
 Section,
 Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
 message: string
 senderEmail: string
}

export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
 return <Html>
  <Head />
  <Preview>Nova mensagem from Site Ratto</Preview>
  <Tailwind>
   <Body className='bg-gray-100'>
    <Container>
     <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
      <Heading className='leading-tight'>Você recebeu uma nova mensagem!</Heading>
      <Text>{message}</Text>
      <Hr />
      <Text>Remetente : {senderEmail}</Text>
     </Section>
    </Container>
   </Body>
  </Tailwind>
 </Html>
}
