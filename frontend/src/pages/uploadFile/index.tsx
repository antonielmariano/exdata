import { useState } from "react";
import ProgressBar from "../../components/header/progressBar";
import { ButtonStyled, MainStyled, SectionStyled, TextH3Styled, TextPStyled } from "./styles";




export default function UploadFile() {
    const [file, setFile] = useState("")
    const [showLoading, setShowLoading] = useState(false)

    const handleSubmit = (event: any) => {
        if(event.target.files[0].type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
            setFile(event.target.files[0].name)  
        }
    }


    return (
        <MainStyled>
            
            {!showLoading &&
                <SectionStyled>
                    
                    <TextH3Styled>Importe .xlsx e filtre os dados</TextH3Styled>
                    <label htmlFor="file-upload">Clique para adicionar</label>
                    <input
                        placeholder="Anexe os arquivos"
                        type="file"
                        name="file-upload" id="file-upload"
                        onChange={(event) => handleSubmit(event)}
                    />
                    {file !== "" &&
                        <TextPStyled>Arquivo adicionado: {file}</TextPStyled>
                    }
                    
                    <ButtonStyled onClick={()=> setShowLoading(true)}>Enviar</ButtonStyled>
                
                </SectionStyled>
            }
                
                {showLoading &&
                    <ProgressBar/>
                }
        </MainStyled>
    )
}