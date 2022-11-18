import Graph from "../../components/graph";
import { MainStyled, SectionDataStyled, SectionListStyled, SectionTypeFilter, SelectOption, SendButton } from "./styles";
import { useState } from "react";
import { internalAPI } from "../../services/internalAPI";
import CardList from "../../components/cardList";
import ReactPaginate from 'react-paginate';
import CardListFull from "../../components/cardListFull";
import { useEffect } from "react"




export default function FilterResults() {
    const [inputValue, setInputValue] = useState("")
    const [option, setOption] = useState("client")
    const [searchResult, setSearchResult] = useState<any>({})
    const [searchFullResult, setSearchFullResult] = useState<any>({})

    const pageCount = Math.ceil(searchResult.count / 10)
    const pageCountFull = Math.ceil(searchFullResult.count / 10)

    const searchByDateOrInput = () => {
        if (inputValue !== "") {
            internalAPI.get(`/filter/${option}/${inputValue}/`)
                .then((response:any) => {
                    setSearchResult(response.data)
                });
        }
    }

    const handlePageClick = (event:any) => {
        const selected = event.selected+1
        const newOffset = (selected * 10) % searchResult.count;
        const newCount = newOffset.toString().substring(0, newOffset.toString().length - 1)
        if(newCount.length === 0){
            internalAPI.get(`/filter/month/1/?page=1`)
            .then((response:any) => {
                setSearchResult(response.data)
            });
            
        }else{
            internalAPI.get(`/filter/month/1/?page=${newCount}`)
            .then((response:any) => {
                setSearchResult(response.data)
            });
        }
        
    };

    const handlePageClickFull = (event:any) => {
        const selected = event.selected+1
        const newOffset = (selected * 10) % searchFullResult.count;
        const newCount = newOffset.toString().substring(0, newOffset.toString().length - 1)
        if(newCount.length === 0){
            internalAPI.get(`/list/?page=1`)
            .then((response:any) => {
                setSearchFullResult(response.data)
            });
            
        }else{
            internalAPI.get(`/list/?page=${newCount}`)
            .then((response:any) => {
                setSearchFullResult(response.data)
            });
        }
        
    };

    useEffect(()=>{
        internalAPI.get(`/list/`)
            .then((response:any) => {
                setSearchFullResult(response.data)
            });
    },[])

    return (
        <MainStyled>

            <div className="graphs">
                
                <Graph />

                <SectionDataStyled>
                        
                        <h3>Filtre por data ou campo de pesquisa</h3>
                        <SectionTypeFilter>
                            <input
                                placeholder="Pesquise..."
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <SelectOption onChange={(e) => setOption(e.target.value)}>
                                <option value="client"> Cliente</option>
                                <option value="category"> Categoria</option>
                                <option value="product"> Produto</option>
                                <option value="month"> Mês</option>
                            </SelectOption>


                        </SectionTypeFilter>
                        <SendButton onClick={() => searchByDateOrInput()}>Pesquisar</SendButton>
                        {Object.keys(searchResult).length > 0 && 
                            searchResult.results.map((result:any)=> 
                                <CardList 
                                    quantity={result.quantity}
                                    value={result.value_billing}

                                />
                            )}
                        {Object.keys(searchResult).length > 0 && 
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=">"
                                onPageChange={handlePageClick}
                                pageCount={pageCount}
                                previousLabel="<"
                                className="React-pagination"
                                renderOnZeroPageCount={null}
                            />
                        }
                </SectionDataStyled>
            
            </div>           
            
            <SectionListStyled>
                <h3>Listagem de todos os dados</h3>
                {Object.keys(searchFullResult).length > 0 && 
                    searchFullResult.results.map((result:any)=> 
                        <CardListFull 
                            result={result}

                        />
                    )}
                
                <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClickFull}
                        pageCount={pageCountFull}
                        previousLabel="<"
                        className="React-pagination"
                        renderOnZeroPageCount={null}
                    />
            </SectionListStyled>

        </MainStyled>
    )
}