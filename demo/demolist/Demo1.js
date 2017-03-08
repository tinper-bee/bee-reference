/**
*
* @title 这是标题
* @description 这是描述
*
*/

const TreeNode = Tree.TreeNode;

const staticdata = {
    "1001A11000000000SVW0": [
    {
      "planpriority": "",
      "pk_org": "0001A110000000000BSR",
      "refcode": "PM201604050020",
      "pk_group": "0001A110000000000BSR",
      "refname": "市场拓展费",
      "pk_eps": "null",
      "pk_workcalendar": "",
      "refpk": "1001A11000000000SXPP",
      "project_sh_name": "",
      "planmodel": "",
      "refjoin": "null"
    },
    {
      "planpriority": "",
      "pk_org": "0001A110000000000BSR",
      "refcode": "PM201604050021",
      "pk_group": "0001A110000000000BSR",
      "refname": "零星客户",
      "pk_eps": "null",
      "pk_workcalendar": "",
      "refpk": "1001A11000000000SXPS",
      "project_sh_name": "",
      "planmodel": "",
      "refjoin": "null"
    }
  ],
  "1001A11000000000SVX6": [
    {
      "planpriority": "",
      "pk_org": "0001A110000000000BSR",
      "refcode": "PM201604050020",
      "pk_group": "0001A110000000000BSR",
      "refname": "市场拓展费2",
      "pk_eps": "null",
      "pk_workcalendar": "",
      "refpk": "1001A11000000000SXPP",
      "project_sh_name": "",
      "planmodel": "",
      "refjoin": "null"
    },
    {
      "planpriority": "",
      "pk_org": "0001A110000000000BSR",
      "refcode": "PM201604050021",
      "pk_group": "0001A110000000000BSR",
      "refname": "零星客户2",
      "pk_eps": "null",
      "pk_workcalendar": "",
      "refpk": "1001A11000000000SXPS",
      "project_sh_name": "",
      "planmodel": "",
      "refjoin": "null"
    }
],
"1001A11000000000SVD6": [
  {
    "planpriority": "",
    "pk_org": "0001A110000000000BSR",
    "refcode": "PM201604050020",
    "pk_group": "0001A110000000000BSR",
    "refname": "市场拓展费3",
    "pk_eps": "null",
    "pk_workcalendar": "",
    "refpk": "1001A11000000000SXPP",
    "project_sh_name": "",
    "planmodel": "",
    "refjoin": "null"
  },
  {
    "planpriority": "",
    "pk_org": "0001A110000000000BSR",
    "refcode": "PM201604050021",
    "pk_group": "0001A110000000000BSR",
    "refname": "零星客户3",
    "pk_eps": "null",
    "pk_workcalendar": "",
    "refpk": "1001A11000000000SXPS",
    "project_sh_name": "",
    "planmodel": "",
    "refjoin": "null"
  }
]
};

const treeData = [
    {
      "id": "1001A11000000000SMAB",
      "name": "规费及其他",
      "pid": "null",
      "refpk": "1001A11000000000SMAB",
      "children": [
          {
            "id": "1001A11000000000SVW0",
            "name": "内部规费",
            "pid": "1001A11000000000SMAB",
            "refpk": "1001A11000000000SVW0"
          },
          {
            "id": "1001A11000000000SVX6",
            "name": "外部规费",
            "pid": "1001A11000000000SMAB",
            "refpk": "1001A11000000000SVX6"
          }
      ]
    },
    {
      "id": "1001A11000000000SVJY",
      "name": "业务招待费",
      "pid": "null",
      "refpk": "1001A11000000000SVJY",
      "children": [
          {
            "id": "1001A11000000000SVD6",
            "name": "宣传品",
            "pid": "1001A11000000000SVD5",
            "refpk": "1001A11000000000SVD6"
          },
          {
            "id": "1001A11000000000SVD7",
            "name": "随附品",
            "pid": "1001A11000000000SVD5",
            "refpk": "1001A11000000000SVD7"
          }
      ]
    },
    {
      "id": "1001A11000000000SVRZ",
      "name": "费用类",
      "pid": "1001A11000000000SVJY",
      "refpk": "1001A11000000000SVRZ"
    },
    {
      "id": "1001A11000000000SVS0",
      "name": "业务用酒",
      "pid": "1001A11000000000SVJY",
      "refpk": "1001A11000000000SVS0"
    },

    {
      "id": "1001A11000000000SVS4",
      "name": "工薪类",
      "pid": "1001A11000000000SVJZ",
      "refpk": "1001A11000000000SVS4",
      "children": [
          {
            "id": "1001A11000000000SVJZ",
            "name": "工资及附加",
            "pid": "null",
            "refpk": "1001A11000000000SVJZ"
          },
          {
            "id": "1001A11000000000SVBN",
            "name": "工资代扣项",
            "pid": "1001A11000000000SMAB",
            "refpk": "1001A11000000000SVBN"
          }
      ]
    },
    {
      "id": "1001A11000000000SVS5",
      "name": "社保类",
      "pid": "1001A11000000000SVJZ",
      "refpk": "1001A11000000000SVS5",
      "children": [
          {
            "id": "1001A11000000000SVS7",
            "name": "代扣代缴",
            "pid": "1001A11000000000SVJZ",
            "refpk": "1001A11000000000SVS7"
          },
      ]
    },
    {
      "id": "1001A11000000000SVD5",
      "name": "低值易耗品项目",
      "pid": "null",
      "refpk": "1001A11000000000SVD5"
    },
    {
      "id": "1001A11000000000SVK0",
      "name": "生产成本项目",
      "pid": "null",
      "refpk": "1001A11000000000SVK0"
    },
    {
      "id": "1001A11000000000SVK2",
      "name": "工程项目",
      "pid": "null",
      "refpk": "1001A11000000000SVK2"
    },
    {
      "id": "1001A11000000000SVK7",
      "name": "工程合同",
      "pid": "null",
      "refpk": "1001A11000000000SVK7"
    }
  ]

class Demo1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            data: staticdata["1001A11000000000SVW0"],
            commonData: [],
            selectValue: "",
            inputValue: ""
        };
        this.commonColumns = [
          { title: '项目编码', dataIndex: 'refcode', key: 'refcode' },
          { title: '项目名称', dataIndex: 'refname', key: 'refname' },
          { title: '项目简称', dataIndex: 'pk_eps', key: 'pk_eps', render: this.changeHeight.bind(this)},
          {
            title: '操作', dataIndex: '', key: 'd', render: this.renderDelete.bind(this),
          },

        ];
        this.columns = [
            { title: '项目编码', dataIndex: 'refcode', key: 'refcode' },
            { title: '项目名称', dataIndex: 'refname', key: 'refname' },
            { title: '项目简称', dataIndex: 'pk_eps', key: 'pk_eps'},
            {
              title: '操作', dataIndex: '', key: 'd', render: this.renderAdd.bind(this),
            },
        ];
        this.renderAdd = this.renderAdd.bind(this);
        this.renderDelete = this.renderDelete.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.close = this.close.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onDataSelect = this.onDataSelect.bind(this);
        this.ensure = this.ensure.bind(this);
    }
    changeHeight (text, record, index) {
        return <div style={{ height: 50, lineHeight: 50 }}>{text}</div>
    }
    renderAdd (text, record, index) {
        return <span style={{ cursor: 'pointer' }} onClick={this.handleAdd(record)}><Icon type="uf-plus"></Icon>添加到常用</span>;
    }
    renderDelete (text, record, index) {
         return <Popconfirm content="确认删除?" onClose={this.handleDelete(index)}>
            <span>
            <Icon type="uf-del"></Icon>
            删除
            </span>
          </Popconfirm>;
    }
    onSelect(selectedKeys, info) {
        if(staticdata[selectedKeys[0]]){
            this.setState({
                data: staticdata[selectedKeys[0]]
            });
        }
    }
    onDataSelect (record, index) {
        this.setState({
            selectValue: record.refname
        })
    }
    handleAdd (record) {
        const self = this;
        return function () {
            let data = self.state.commonData;
            data.push(record);
            self.setState({
                commonData: data
            })
        }
    }
    handleDelete (index) {
        const self = this;
        return function () {
            let data = self.state.commonData;
            data.splice(index, 1);
            self.setState({
                commonData: data
            });
        }
    }
    handleFocus () {
        this.setState({
            show: true
        })
    }
    close () {
        this.setState({
            show: false
        })
    }
    ensure () {
        this.setState({
            inputValue: this.state.selectValue,
            show: false
        })
    }
    setClassName (record, index, indent) {
        console.log(record, index);
        console.log(indent);
    }
    render () {
        const { data, commonData } = this.state;
        data.forEach(function (item, index) {
            data.key = index;
        });
        commonData.forEach(function (item, index) {
            commonData.key = index;
        });
        const loop = data => data.map((item) => {
             if (item.children) {
               return (
                 <TreeNode key={item.id} title={<span><Icon type="uf-treefolder"></Icon>{item.name}</span>}>
                   {loop(item.children)}
                 </TreeNode>
               );
             }
             return <TreeNode key={item.id} title={<span><Icon type="uf-box-o-2"></Icon>{item.name}</span>} />;
           });
        return (
            <Row>
                <Col md={10} mdOffset={1}>
                    <FormGroup>
                        <Label>参照例子</Label>
                        <FormControl
                        value={this.state.inputValue}
                        onClick={this.handleFocus}
                        />
                    </FormGroup>
                </Col>
                <Modal show={ this.state.show } size='xlg' onHide={ this.close }>
                   <Modal.Header closeButton>
                       <Modal.Title > 我来组成头部 </Modal.Title>
                   </Modal.Header >
                   <Modal.Body >
                   <Tabs
                     defaultActiveKey="2"
                     renderTabBar={()=><ScrollableInkTabBar />}
                     renderTabContent={()=><TabContent />}
                   >
                   <TabPane tab="常用" key="1">
                       <Table
                       onRowClick = { this.onDataSelect }
                       columns={this.commonColumns}
                       data={commonData}
                       />
                   </TabPane>

                   <TabPane tab="参照" key="2">
                       <div>
                           <Col md={3}>
                           <Tree
                              onSelect={this.onSelect}
                            >
                              {loop(treeData)}
                            </Tree>
                           </Col>
                           <Col md={8}>
                               <Table
                               rowClassName = { this.setClassName }
                               onRowClick = { this.onDataSelect }
                               columns={this.columns}
                               data={data}
                               />
                           </Col>
                       </div>
                   </TabPane>
                   </Tabs>

                   </Modal.Body>
                   <Modal.Footer>
                        <Button onClick={ this.ensure } colors="primary" style={{ marginRight: 50 }}> 确认 </Button>
                       <Button onClick={ this.close }> 关闭 </Button>
                   </Modal.Footer>
               </Modal>
            </Row>
            )
    }
}
