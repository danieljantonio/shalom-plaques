import React, { FC, PropsWithChildren, useState } from 'react'
import {AiFillQuestionCircle} from 'react-icons/ai'

const SocialLinkIcons = () => {
	return <div className='bottom-4 right-2 lg:right-4 fixed'>
		<div>
			<CircleContainer link='https://www.instagram.com/maranathahandicraft/'><img className='h-6 w-6' src='/icons/instagram-icon.png'/></CircleContainer>
			<CircleContainer link='https://api.whatsapp.com/send/?phone=62089675659317'><img className='h-6 w-6' src='/icons/whatsapp-icon.png'/></CircleContainer>
			<CircleContainer link='https://www.tokopedia.com/maranathahc'><img className='h-6 w-6' src='/icons/tokopedia-icon.png'/></CircleContainer>
			<CircleContainer link='https://shopee.co.id/maranatha.handicraft'><img className='h-6 w-6' src='/icons/shopee-icon.png'/></CircleContainer>
			<CircleContainer link='/contact-us'><img className='h-6 w-6' src='/icons/email-icon.png'/></CircleContainer>
		</div>
	</div>
}

export default SocialLinkIcons

interface ICircleContainerProps {
	link: string
}

const CircleContainer: FC<PropsWithChildren<ICircleContainerProps>> = ({children, link, className}) => {
	return <a href={link} target="_blank" className={`bg-white border h-8 w-8 overflow-hidden rounded-full border-gray-400 flex justify-center  items-center mt-3 shadow-lg ${className}`}>{children}</a>
}