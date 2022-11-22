import { useState } from "react";
import { useHistory } from "react-router-dom";
import ProgressBar from "../../components/progressBar";
import { internalAPI } from "../../services/internalAPI";
import { ButtonStyled, MainStyled, FormStyled, TextH3Styled, TextPStyled } from "./styles";




export default function UploadFile() {
    const [file, setFile] = useState<File>()
    const [showLoading, setShowLoading] = useState(false)
    const [progress, setProgress] = useState(5);
    const history = useHistory()

    const handleChange = (event: any) => {
        if(event.target.files[0].type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
            setFile(event.target.files[0])  
        }
    }

    const handleSubmit = async (event:any)=>{
        event.preventDefault()
        if(file !== undefined){
            const formData = new FormData()
            formData.append('table', file)
            setShowLoading(true)
            setTimeout(()=>{setProgress(10)},3000)
            setTimeout(()=>{setProgress(20)},9000)
            setTimeout(()=>{setProgress(30)},15000)
            setTimeout(()=>{setProgress(40)},80000)
            setTimeout(()=>{setProgress(50)},120000)
            setTimeout(()=>{setProgress(50)},190000)
            setTimeout(()=>{setProgress(80)},250000)
            setTimeout(()=>{setProgress(90)},290000)
            await internalAPI.post("uploads/", formData)
            .then((response) => {
                setProgress(100)
                setTimeout(()=>{
                    history.push("/filtrar")
                    setShowLoading(false);
                },900)
                
          });
        }
       
    }


    return (
        <MainStyled>
            
            {!showLoading &&
                <FormStyled onSubmit={handleSubmit} encType="multipart/form-data">
                    
                    <TextH3Styled>Importe .xlsx e filtre os dados</TextH3Styled>
                    <label htmlFor="file-upload">Clique para adicionar</label>
                    <input
                        placeholder="Anexe os arquivos"
                        type="file"
                        name="table" 
                        id="file-upload"
                        onChange={(event) => handleChange(event)}
                    />
                    {file &&
                        <TextPStyled>Arquivo adicionado: {file.name}</TextPStyled>
                    }
                    
                    <ButtonStyled type="submit">Enviar</ButtonStyled>
                
                </FormStyled>
            }
                
                {showLoading &&
                    <ProgressBar
                        progress={progress}
                    />
                }
        </MainStyled>
    )
}