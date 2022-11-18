import { useState } from "react";
import ProgressBar from "../../components/header/progressBar";
import { internalAPI } from "../../services/internalAPI";
import { ButtonStyled, MainStyled, FormStyled, TextH3Styled, TextPStyled } from "./styles";




export default function UploadFile() {
    const [file, setFile] = useState<File>()
    const [showLoading, setShowLoading] = useState(false)

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
            await internalAPI.post("uploads/", formData)
            .then((response) => {
              console.log(response.data);
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
                    <ProgressBar/>
                }
        </MainStyled>
    )
}