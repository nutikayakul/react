import "./App.css";
import { Badge } from "primereact/badge";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";

import { PanelMenu } from "primereact/panelmenu";
import { BreadCrumb } from "primereact/breadcrumb";
import { TabPanel, TabView } from "primereact/tabview";
import { useEffect, useState } from "react";
import { Paginator } from "primereact/paginator";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "./Service/ProductService";

function App() {
  const itemRenderer = (menu) => (
    <a className="">
      <span className={menu.icon} />
      <span>{menu.label}</span>
      {menu.badge && <Badge className="ml-auto" value={menu.badge} />}
      {menu.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {menu.shortcut}
        </span>
      )}
    </a>
  );

  
  const tabmenu = [
    {
      label: "Files",
      icon: "pi pi-file",
      items: [
        {
          label: "Documents",
          icon: "pi pi-file",
          items: [
            {
              label: "Invoices",
              icon: "pi pi-file-pdf",
              items: [
                {
                  label: "Pending",
                  icon: "pi pi-stop",
                },
                {
                  label: "Paid",
                  icon: "pi pi-check-circle",
                },
              ],
            },
            {
              label: "Clients",
              icon: "pi pi-users",
            },
          ],
        },
        {
          label: "Images",
          icon: "pi pi-image",
          items: [
            {
              label: "Logos",
              icon: "pi pi-image",
            },
          ],
        },
      ],
    },
    {
      label: "Cloud",
      icon: "pi pi-cloud",
      items: [
        {
          label: "Upload",
          icon: "pi pi-cloud-upload",
        },
        {
          label: "Download",
          icon: "pi pi-cloud-download",
        },
        {
          label: "Sync",
          icon: "pi pi-refresh",
        },
      ],
    },
    {
      label: "Devices",
      icon: "pi pi-desktop",
      items: [
        {
          label: "Phone",
          icon: "pi pi-mobile",
        },
        {
          label: "Desktop",
          icon: "pi pi-desktop",
        },
      ],
    },
    {
      label: "List of names",
      icon: "pi pi-desktop",
      items: [
        {
          label: "Phone",
          icon: "pi pi-mobile",
        },
        {
          label: "Desktop",
          icon: "pi pi-desktop",
        },
        {
          label: "Tablet",
          icon: "pi pi-tablet",
        },
      ],
    },
    {
      label: "Position",
      icon: "pi pi-desktop",
      items: [
        {
          label: "Phone",
          icon: "pi pi-mobile",
        },
        {
          label: "Desktop",
          icon: "pi pi-desktop",
        },
        {
          label: "Tablet",
          icon: "pi pi-tablet",
        },
      ],
    },
    {
      label: "Settings",
      icon: "pi pi-desktop",
      items: [
        {
          label: "Phone",
          icon: "pi pi-mobile",
        },
        {
          label: "Desktop",
          icon: "pi pi-desktop",
        },
        {
          label: "Tablet",
          icon: "pi pi-tablet",
        },
      ],
    },
  ];
  const menu = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Features",
      icon: "pi pi-star",
    },
    
  ];

  const end = (
    <div className="flex align-items-center gap-2">
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  );
  const items = [
    { label: "Electronics" },
    // { label: "Computer" },
    // { label: "Accessories" },
    // { label: "Keyboard" },
    // { label: "Wireless" },
  ];
  const home = { icon: "pi pi-home", url: "https://primereact.org" };

  // const menuLeft = useRef(null);
  // const menuRight = useRef(null);
  // const toast = useRef(null);

  const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const [products, setProducts] = useState([]);
    useEffect(() => {
      ProductService.getProductsMini().then(data => setProducts(data));
  }, []);

  return (
    <div className="App d-flex ">
      <Menubar model={menu} end={end} className="card-menu" />
      <div className="tabmenu w-full md:w-2rem">
        <PanelMenu model={tabmenu} />
      </div>
      <BreadCrumb model={items} home={home} className="p-2" />
      <div className="card">
            <TabView>
                <TabPanel header="เนื้อหา">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel header="ข้อความ">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel header="ประชาสัมพันธุ์">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabView>
        
        <div className="card">
            <DataTable value={products} showGridlines tableStyle={{ minWidth: '50rem' }}>
            <Column field="id" header="id"></Column>
                <Column field="code" header="Code"></Column>
                <Column field="image" header="image"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="price" header="price"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
        <div className="card">
            <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[5, 10, 20]} onPageChange={onPageChange} />
        </div>
        </div>
    </div>
  );
}

export default App;
