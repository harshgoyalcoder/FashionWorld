import Products from '@/app/components/Products';
import React, { useState } from 'react';
import styled from 'styled-components';
const Container = styled.div`
    
`;
const Title = styled.h1`
  margin: 20px;
  `;
//   ${mobile({ textAlign: 'center', margin: '7px' })}
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    `;
    // ${mobile({ justifyContent: 'space-around' })}
const Filter = styled.div`
    margin: 20px;
    `;
    // ${mobile({ margin: '10px', display: 'flex', flexDirection: 'column', gap: '0.45em' })}
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    `;
    // ${mobile({ fontSize: '15px' })}
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option`
    
`;
export default function ProductList() {
    // taking category name
    // const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    const handleFilters = (e:any) => {
        const value = e.target.value;
        setFilters({
            ...filters, [e.target.name]: value,
        })
    }
    return (
        <Container>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name='color' onChange={handleFilters}>
                        <Option disabled >Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option disabled >Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>

                </Filter>

                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={e => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price(asc)</Option>
                        <Option value="des">Price(des)</Option>
                    </Select>
                </Filter>

            </FilterContainer>


            {/* passsing all types of filters from the filter-container components  */}
            {/* and taking the filters as props in the products components--changes to be made there  */}
            <Products cat={cat} filters={filters} sort={sort} />
        </Container>
    )
}
