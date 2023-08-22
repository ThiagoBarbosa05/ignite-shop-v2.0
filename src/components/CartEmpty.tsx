import Image from 'next/image'
import bagEmpty from '../assets/add-item-image.png'
import { EmptyBag } from '@/styles/empty'

import {Close} from '@radix-ui/react-dialog'

export function CartEmpty() {
    return (
        <EmptyBag>
            <Image src={bagEmpty} width={240} height={240} alt='' />
            <strong>Por favor adicione alguma camisa em sua sacola</strong>

            <Close asChild>
                <button>Escolher camisa</button>
            </Close>
        </EmptyBag>
    )
}