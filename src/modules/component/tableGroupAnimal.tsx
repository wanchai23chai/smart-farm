import React, { Component } from 'react';
import { Table, Header, Image } from 'semantic-ui-react';
import SmartFarmApi from '../../api/SmartFarmApi';

class TableGroupAnimal extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false
    }
  }
  async componentDidMount() {
    const data = await this.fetchData()
    this.setState({ data: data })
  }
  async fetchData() {
    const data = await SmartFarmApi.getAllAnimal()
    let result = data.map((animal) => {
      animal.pictures = animal.pictures.map(item => {
        return { data: `/api/v1/animal/pictures/${animal.barcode}/${item.ID}/${item.filename}`, ID: item.ID }
      })
      return animal
    })
    return result
  }
  render() {
    const row = this.state.data.map((item,index) => {
      const comp =
        <Table.Row>
          <Table.Cell>{index+1}</Table.Cell>
          <Table.Cell>
            <Header as='h4' image>
              {item.pictures.length > 0 ? <Image src={item.pictures[0].data} rounded size='mini' /> :  
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' rounded size='mini' />}
              <Header.Content>
                {item.barcode}
                <Header.Subheader>{item.name}</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{item.AnimalType.AnimalTypeName}</Table.Cell>
        </Table.Row>
        return comp
    })
    console.log(this.state)
    return (
      <>
        <Table basic='very' celled collapsing unstackable>
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>ลำดับ</Table.HeaderCell>
              <Table.HeaderCell>ข้อมูลสัตว์</Table.HeaderCell>
              <Table.HeaderCell>ประเภท</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {row}
            {/* <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
                  <Header.Content>
                    Lena
              <Header.Subheader>Human Resources</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>22</Table.Cell>
            </Table.Row> */}
          </Table.Body>
        </Table>
      </>
    );
  }
}

export default TableGroupAnimal;