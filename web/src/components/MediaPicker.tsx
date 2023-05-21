'use client'

import { ChangeEvent, useState } from "react"

export default function MediaPicker() {
    const [preview, setPreview] = useState<string | null>('');

    function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
        const {files} = event.target

        if(!files){
            return 
        }

        const previewURL = URL.createObjectURL(files[0]);
        setPreview(previewURL)
    }

    return (
        // Fragment -> Não aparece no html
        
        <>
            <input type="file"name="coverURL" id="media" className="invisible h-0 w-0" accept="image/*" onChange={onFileSelected} />
            {preview && <img src={preview} alt="" className="w-full aspect-video rounded-lg object-cover"/>}
        </>
    )
}