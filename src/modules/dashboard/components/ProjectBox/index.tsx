import { IPaper, IPaperForm } from "../../types/models/paper";
import Image from 'next/image'

export const ProjectBox = ({ paper }: { paper?: IPaper | IPaperForm | null }) => {

    return <div className="card card-side shadow-xl" style={{ width: '426px', height: '154px' }}>
        <figure className="w-2/6">
            <Image
                style={{ objectFit: 'contain' }}
                src={paper?.thumbnail[0] ? URL?.createObjectURL(paper.thumbnail[0]) : ''}
                alt={paper?.title || ''}
                fill
            />
        </figure>
        <div className="flex w-4/6 flex-col justify-center px-4 text-start">
            <h2 className="card-title text-gray-900">{paper?.title}</h2>
            <p>{paper?.description}</p>
        </div>
    </div>
}