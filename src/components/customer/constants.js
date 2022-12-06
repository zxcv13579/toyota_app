// svg
import DashboardIcon from '../../images/customer/dashboard.svg';
import YtIcon from '../../images/customer/yt.svg';
import AfterSalesIcon from '../../images/customer/afterSales.svg';
import LoanIcon from '../../images/customer/loan.svg';
import NewCarIcon from '../../images/customer/newCar.svg';
import HelperIcon from '../../images/customer/helper.svg';
// component
import LoanStatusBox from './LoanStatusBox';
export const homeData = [
  {
    Icon: <DashboardIcon />,
    bg: '#00BDD9',
    color: '#FFF',
    route: 'dashboard',
    text: '儀表板燈號說明',
  },
  {
    Icon: <YtIcon />,
    bg: '#FF4A31',
    color: '#FFF',
    route: 'yt',
    text: '配備操作影音庫',
  },
  {
    Icon: <AfterSalesIcon />,
    bg: '#FF9C29',
    color: '#FFF',
    route: 'afterSales',
    text: '售後服務',
  },
  {
    Icon: <LoanIcon />,
    bg: '#0085DE',
    color: '#FFF',
    route: 'loan',
    text: '貸款進度',
  },
  {
    Icon: <NewCarIcon />,
    bg: '#46C6A4',
    color: '#FFF',
    route: 'newCar',
    text: '新車／SP分享圖',
  },
  {
    Icon: <HelperIcon />,
    bg: '#FF84BF',
    color: '#FFF',
    route: 'helper',
    text: '交車小幫手',
  },
];

export const loanStatus = {
  incoming: <LoanStatusBox bg="#0085DE">進件</LoanStatusBox>,
  review: <LoanStatusBox bg="#BEBEBE">審核</LoanStatusBox>,
  pass: <LoanStatusBox bg="#2BCB7E">過件</LoanStatusBox>,
  appropriation: <LoanStatusBox bg="#F1001F">撥款</LoanStatusBox>,
};

export const transferStatus = {
  incoming: '進件',
  review: '審核',
  pass: '過件',
  appropriation: '撥款',
};

export const loanLists = [
  {
    money: '360000',
    name: '王＊明',
    carType: 'Rav4',
    period: '60',
    payMonth: '12516',
    status: 'incoming',
    companyPayDate: '2019-04-06',
    userPayDate: '2019-06-06',
  },
  {
    money: '20000',
    name: '王＊明',
    carType: 'VIOS',
    period: '60',
    payMonth: '3924',
    status: 'pass',
    companyPayDate: '2020-12-04',
    userPayDate: '2021-01-03',
  },
  {
    money: '100000',
    name: '李＊昇',
    carType: 'ALTIS',
    period: '40',
    payMonth: '54000',
    status: 'review',
    companyPayDate: '2021-10-15',
    userPayDate: '2021-12-15',
  },
  {
    money: '20000',
    name: '陳＊虎',
    carType: 'YARIS',
    period: '60',
    payMonth: '43094',
    status: 'appropriation',
    companyPayDate: '2020-07-30',
    userPayDate: '2020-09-30',
  },
];
