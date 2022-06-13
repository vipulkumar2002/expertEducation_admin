import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import knowledgeBaseCategory from "./views/pages/knowledge-base/Category";
import knowledgeBaseQuestion from "./views/pages/knowledge-base/Questions";
import { ContextLayout } from "./utility/context/Layout";

//import EnquiryFormList from "./views/apps/contactUs/EnquiryFormList";
//import { Component } from "react";
//import { starTask } from "./redux/actions/todo";

// Route-based code splitting
const analyticsDashboard = lazy(() =>
  import("./views/dashboard/analytics/AnalyticsDashboard")
);
const ecommerceDashboard = lazy(() =>
  import("./views/dashboard/ecommerce/EcommerceDashboard")
);
const home = lazy(() => import("./views/pages/landingPage/Home"));
//  Expert Education Tabs
const studentList = lazy(() => import("./views/apps/student/StudentList"));
const WithDrowList = lazy(() =>
  import("./views/apps/WithDrowList/WithdrowList")
);
const ReferralCodeList = lazy(() =>
  import("./views/apps/referralCode/ReferralCodeList")
);

const FirstPhase = lazy(() =>
  import("./views/apps/affilateProgram/FirstPhase")
);
const SecondPhase = lazy(() =>
  import("./views/apps/affilateProgram/SecondPhase")
);
const teacherList = lazy(() => import("./views/apps/teacher/TeacherList"));
const approvedTeacher = lazy(() =>
  import("./views/apps/teacher/ApprovedTeacher")
);
const addTeacher = lazy(() => import("./views/apps/teacher/AddTeacher"));
const editTeacher = lazy(() => import("./views/apps/teacher/EditTeacher"));
const viewTeacher = lazy(() => import("./views/apps/teacher/ViewTeacher"));
const courseList = lazy(() => import("./views/apps/course/CourseList"));
const addCourse = lazy(() => import("./views/apps/course/AddCourse"));
const editCourse = lazy(() => import("./views/apps/course/EditCourse"));
const viewCourse = lazy(() => import("./views/apps/course/ViewCourse"));
const addVideoPdf = lazy(() => import("./views/apps/course/AddVideoPdf"));
const categoryList = lazy(() => import("./views/apps/category/CategoryList"));
const addCategory = lazy(() => import("./views/apps/category/AddCategory"));
const editCategory = lazy(() => import("./views/apps/category/EditCategory"));
const viewCategory = lazy(() => import("./views/apps/category/ViewCategory"));
const transactionList = lazy(() =>
  import("./views/apps/transationHistory/TransactionList")
);
const commentsList = lazy(() => import("./views/apps/comment/CommentsList"));
const enrollList = lazy(() => import("./views/apps/enrollment/EnrollList"));
const walletList = lazy(() => import("./views/apps/wallet/WalletList"));
const walletRequest = lazy(() =>
  import("./views/apps/walletRequest/WalletRequest")
);
const kycList = lazy(() => import("./views/apps/kyc/KycList"));
const badgeList = lazy(() => import("./views/apps/badge/BadgeList"));
const addBadge = lazy(() => import("./views/apps/badge/AddBadge"));
const levelList = lazy(() => import("./views/apps/level/LevelList"));
const addLevel = lazy(() => import("./views/apps/level/AddLevel"));
// My Component starts here

const allUsers = lazy(() => import("./views/apps/users/user/AllUsers"));
const addUsers = lazy(() => import("./views/apps/users/user/AddUsers"));
const viewUsers = lazy(() => import("./views/apps/users/user/ViewUsers"));
const roleList = lazy(() => import("./views/apps/roleAndPermission/RoleList"));
const addRole = lazy(() => import("./views/apps/roleAndPermission/AddRole"));
const viewRole = lazy(() => import("./views/apps/roleAndPermission/ViewRole"));

const addNotification = lazy(() =>
  import("./views/apps/notifications/AddNotification")
);
const notification = lazy(() =>
  import("./views/apps/notifications/Notification")
);
const notiteachList = lazy(() =>
  import("./views/apps/notiteach/NotiteachList")
);
const addNotiteach = lazy(() => import("./views/apps/notiteach/AddNotiteach"));
const pendingPaymentsList = lazy(() =>
  import("./views/apps/sellerPayout/pendingPayments/PendingPaymentsList")
);
const completedPaymentsList = lazy(() =>
  import("./views/apps/sellerPayout/pendingPayments/CompletedPaymentsList")
);
const viewCompletedPaymentsList = lazy(() =>
  import("./views/apps/sellerPayout/pendingPayments/ViewCompletedPayments")
);

const addSubscription = lazy(() =>
  import("./views/apps/subscription/AddSubscription")
);
const choosePaymentOption = lazy(() =>
  import("./views/apps/subscription/ChoosePaymentOption")
);

const subscriptionList = lazy(() =>
  import("./views/apps/subscription/SubscriptionList")
);
const pageLayout = lazy(() => import("./views/apps/pageLayout/PageLayout"));

const warehouseList = lazy(() =>
  import("./views/apps/warehouse/WarehouseList")
);
const addWarehouse = lazy(() => import("./views/apps/warehouse/AddWarehouse"));
const viewWarehouse = lazy(() =>
  import("./views/apps/warehouse/ViewWarehouse")
);
const editWarehouse = lazy(() =>
  import("./views/apps/warehouse/EditWarehouse")
);

const importDemo = lazy(() =>
  import("./views/apps/helpAndSupport/importDemo/ImportDemo")
);

const Login = lazy(() => import("./views/pages/authentication/login/Login"));

const forgotPassword = lazy(() =>
  import("./views/pages/authentication/ForgotPassword")
);
const resetPassword = lazy(() =>
  import("./views/pages/authentication/ResetPassword")
);
const smsSetting = lazy(() => import("./views/apps/siteSetting/SMSSetting"));
const emailSetting = lazy(() =>
  import("./views/apps/siteSetting/EmailSetting")
);
const general = lazy(() => import("./views/apps/siteSetting/General"));
const userProfile = lazy(() => import("./views/pages/profile/UserProfile"));

const reasonList = lazy(() => import("./views/apps/reason/ReasonList"));
const addReason = lazy(() => import("./views/apps/reason/AddReason"));
// const editReason = lazy(() => import("./views/apps/reason/EditReason"));
// const viewReason = lazy(() => import("./views/apps/reason/ViewReason"));

const transferTypeList = lazy(() =>
  import("./views/apps/transferType/TransferTypeList")
);
const addTransferType = lazy(() =>
  import("./views/apps/transferType/AddTransferType")
);
const editTransferType = lazy(() =>
  import("./views/apps/transferType/EditTransferType")
);
const viewTransferType = lazy(() =>
  import("./views/apps/transferType/ViewTransferType")
);

const sliderList = lazy(() => import("./views/apps/slider/SliderList"));
const addSlider = lazy(() => import("./views/apps/slider/AddSlider"));

const editProfile = lazy(() => import("./views/apps/profile/EditProfile"));

//Theme Component starts from here
const userList = lazy(() => import("./views/apps/user/list/List"));
const userEdit = lazy(() => import("./views/apps/user/edit/Edit"));
const userView = lazy(() => import("./views/apps/user/view/View"));
const email = lazy(() => import("./views/apps/email/Email"));
const chat = lazy(() => import("./views/apps/chat/Chat"));
const todo = lazy(() => import("./views/apps/todo/Todo"));
const calendar = lazy(() => import("./views/apps/calendar/Calendar"));
const shop = lazy(() => import("./views/apps/ecommerce/shop/Shop"));
const wishlist = lazy(() => import("./views/apps/ecommerce/wishlist/Wishlist"));
const checkout = lazy(() => import("./views/apps/ecommerce/cart/Cart"));
const productDetail = lazy(() =>
  import("./views/apps/ecommerce/detail/Detail")
);
const grid = lazy(() => import("./views/ui-elements/grid/Grid"));
const typography = lazy(() =>
  import("./views/ui-elements/typography/Typography")
);
const textutilities = lazy(() =>
  import("./views/ui-elements/text-utilities/TextUtilities")
);
const syntaxhighlighter = lazy(() =>
  import("./views/ui-elements/syntax-highlighter/SyntaxHighlighter")
);
const colors = lazy(() => import("./views/ui-elements/colors/Colors"));
const reactfeather = lazy(() =>
  import("./views/ui-elements/icons/FeatherIcons")
);
const basicCards = lazy(() => import("./views/ui-elements/cards/basic/Cards"));
const statisticsCards = lazy(() =>
  import("./views/ui-elements/cards/statistics/StatisticsCards")
);
const analyticsCards = lazy(() =>
  import("./views/ui-elements/cards/analytics/Analytics")
);
const actionCards = lazy(() =>
  import("./views/ui-elements/cards/actions/CardActions")
);
const Alerts = lazy(() => import("./components/reactstrap/alerts/Alerts"));
const Buttons = lazy(() => import("./components/reactstrap/buttons/Buttons"));
const Breadcrumbs = lazy(() =>
  import("./components/reactstrap/breadcrumbs/Breadcrumbs")
);
const Carousel = lazy(() =>
  import("./components/reactstrap/carousel/Carousel")
);
const Collapse = lazy(() =>
  import("./components/reactstrap/collapse/Collapse")
);
const Dropdowns = lazy(() =>
  import("./components/reactstrap/dropdowns/Dropdown")
);
const ListGroup = lazy(() =>
  import("./components/reactstrap/listGroup/ListGroup")
);
const Modals = lazy(() => import("./components/reactstrap/modal/Modal"));
const Pagination = lazy(() =>
  import("./components/reactstrap/pagination/Pagination")
);
const NavComponent = lazy(() =>
  import("./components/reactstrap/navComponent/NavComponent")
);
const Navbar = lazy(() => import("./components/reactstrap/navbar/Navbar"));
const Tabs = lazy(() => import("./components/reactstrap/tabs/Tabs"));
const TabPills = lazy(() =>
  import("./components/reactstrap/tabPills/TabPills")
);
const Tooltips = lazy(() =>
  import("./components/reactstrap/tooltips/Tooltips")
);
const Popovers = lazy(() =>
  import("./components/reactstrap/popovers/Popovers")
);
const Badge = lazy(() => import("./components/reactstrap/badge/Badge"));
const BadgePill = lazy(() =>
  import("./components/reactstrap/badgePills/BadgePill")
);
const Progress = lazy(() =>
  import("./components/reactstrap/progress/Progress")
);
const Media = lazy(() => import("./components/reactstrap/media/MediaObject"));
const Spinners = lazy(() =>
  import("./components/reactstrap/spinners/Spinners")
);
const Toasts = lazy(() => import("./components/reactstrap/toasts/Toasts"));
const avatar = lazy(() => import("./components/@vuexy/avatar/Avatar"));
const AutoComplete = lazy(() =>
  import("./components/@vuexy/autoComplete/AutoComplete")
);
const chips = lazy(() => import("./components/@vuexy/chips/Chips"));
const divider = lazy(() => import("./components/@vuexy/divider/Divider"));
const vuexyWizard = lazy(() => import("./components/@vuexy/wizard/Wizard"));
const listView = lazy(() => import("./views/ui-elements/data-list/ListView"));
const thumbView = lazy(() => import("./views/ui-elements/data-list/ThumbView"));
const select = lazy(() => import("./views/forms/form-elements/select/Select"));
const switchComponent = lazy(() =>
  import("./views/forms/form-elements/switch/Switch")
);
const checkbox = lazy(() =>
  import("./views/forms/form-elements/checkboxes/Checkboxes")
);
const radio = lazy(() => import("./views/forms/form-elements/radio/Radio"));
const input = lazy(() => import("./views/forms/form-elements/input/Input"));
const group = lazy(() =>
  import("./views/forms/form-elements/input-groups/InputGoups")
);
const numberInput = lazy(() =>
  import("./views/forms/form-elements/number-input/NumberInput")
);
const textarea = lazy(() =>
  import("./views/forms/form-elements/textarea/Textarea")
);
const pickers = lazy(() =>
  import("./views/forms/form-elements/datepicker/Pickers")
);
const inputMask = lazy(() =>
  import("./views/forms/form-elements/input-mask/InputMask")
);
const layout = lazy(() => import("./views/forms/form-layouts/FormLayouts"));
const formik = lazy(() => import("./views/forms/formik/Formik"));
const tables = lazy(() => import("./views/tables/reactstrap/Tables"));
const ReactTables = lazy(() =>
  import("./views/tables/react-tables/ReactTables")
);
const Aggrid = lazy(() => import("./views/tables/aggrid/Aggrid"));
const DataTable = lazy(() => import("./views/tables/data-tables/DataTables"));
const profile = lazy(() => import("./views/pages/profile/Profile"));
const faq = lazy(() => import("./views/pages/faq/FAQ"));
const knowledgeBase = lazy(() =>
  import("./views/pages/knowledge-base/KnowledgeBase")
);
const search = lazy(() => import("./views/pages/search/Search"));
const accountSettings = lazy(() =>
  import("./views/pages/account-settings/AccountSettings")
);
const invoice = lazy(() => import("./views/pages/invoice/Invoice"));

const comingSoon = lazy(() => import("./views/pages/misc/ComingSoon"));
const error404 = lazy(() => import("./views/pages/misc/error/404"));
const error500 = lazy(() => import("./views/pages/misc/error/500"));
const authorized = lazy(() => import("./views/pages/misc/NotAuthorized"));
const maintenance = lazy(() => import("./views/pages/misc/Maintenance"));
const apex = lazy(() => import("./views/charts/apex/ApexCharts"));
const chartjs = lazy(() => import("./views/charts/chart-js/ChartJS"));
const extreme = lazy(() => import("./views/charts/recharts/Recharts"));
const leafletMaps = lazy(() => import("./views/maps/Maps"));
const toastr = lazy(() => import("./extensions/toastify/Toastify"));
const sweetAlert = lazy(() => import("./extensions/sweet-alert/SweetAlert"));
const rcSlider = lazy(() => import("./extensions/rc-slider/Slider"));

const uploader = lazy(() => import("./extensions/dropzone/Dropzone"));
const editor = lazy(() => import("./extensions/editor/Editor"));
const drop = lazy(() => import("./extensions/drag-and-drop/DragAndDrop"));
const tour = lazy(() => import("./extensions/tour/Tour"));
const clipboard = lazy(() =>
  import("./extensions/copy-to-clipboard/CopyToClipboard")
);
const menu = lazy(() => import("./extensions/contexify/Contexify"));
const swiper = lazy(() => import("./extensions/swiper/Swiper"));
const i18n = lazy(() => import("./extensions/i18n/I18n"));
const reactPaginate = lazy(() => import("./extensions/pagination/Pagination"));
const tree = lazy(() => import("./extensions/treeview/TreeView"));
const Import = lazy(() => import("./extensions/import-export/Import"));
const Export = lazy(() => import("./extensions/import-export/Export"));
const ExportSelected = lazy(() =>
  import("./extensions/import-export/ExportSelected")
);
const lockScreen = lazy(() =>
  import("./views/pages/authentication/LockScreen")
);
const register = lazy(() =>
  import("./views/pages/authentication/register/Register")
);
const accessControl = lazy(() =>
  import("./extensions/access-control/AccessControl")
);

// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout;
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            );
          }}
        </ContextLayout.Consumer>
      );
    }}
  />
);
const mapStateToProps = state => {
  return {
    // user: state.auth.login.userRole,
  };
};
const AppRoute = connect(mapStateToProps)(RouteConfig);

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <Route
            render={() =>
              localStorage.getItem("ad-token") ? (
                <>
                  <AppRoute
                    exact={true}
                    path="/"
                    component={analyticsDashboard}
                  />
                  <AppRoute
                    path="/ecommerce-dashboard"
                    component={ecommerceDashboard}
                  />
                  <AppRoute
                    path="/app/student/studentList"
                    component={studentList}
                  />
                  <AppRoute
                    path="/app/teacher/teacherList"
                    component={teacherList}
                  />
                  <AppRoute
                    path="/app/teacher/approvedTeacher"
                    component={approvedTeacher}
                  />
                  <AppRoute
                    path="/app/teacher/addTeacher"
                    component={addTeacher}
                  />
                  <AppRoute
                    path="/app/teacher/editTeacher/:id"
                    component={editTeacher}
                  />
                  <AppRoute
                    path="/app/teacher/viewTeacher/:id"
                    component={viewTeacher}
                  />
                  <AppRoute
                    path="/app/course/addCourse"
                    component={addCourse}
                  />
                  <AppRoute
                    path="/app/course/courseList"
                    component={courseList}
                  />
                  <AppRoute
                    path="/app/course/editCourse/:id"
                    component={editCourse}
                  />
                  <AppRoute
                    path="/app/course/viewCourse/:id"
                    component={viewCourse}
                  />
                  <AppRoute
                    path="/app/course/addVideoPdf/:id"
                    component={addVideoPdf}
                  />
                  <AppRoute
                    path="/app/category/categoryList"
                    component={categoryList}
                  />
                  <AppRoute
                    path="/app/category/addCategory"
                    component={addCategory}
                  />
                  <AppRoute
                    path="/app/category/editCategory/:id"
                    component={editCategory}
                  />
                  <AppRoute
                    path="/app/category/viewCategory/:id"
                    component={viewCategory}
                  />
                  <AppRoute
                    path="/app/transationHistory/transactionList"
                    component={transactionList}
                  />
                  <AppRoute
                    path="/app/comment/commentsList"
                    component={commentsList}
                  />
                  <AppRoute
                    path="/app/enrollment/enrollList"
                    component={enrollList}
                  />
                  <AppRoute
                    path="/app/wallet/walletList"
                    component={walletList}
                  />
                  <AppRoute
                    path="/app/walletRequest/walletRequest"
                    component={walletRequest}
                  />
                  <AppRoute path="/app/kyc/kycList" component={kycList} />
                  <AppRoute path="/app/badge/badgeList" component={badgeList} />
                  <AppRoute path="/app/badge/addBadge" component={addBadge} />
                  <AppRoute path="/app/level/levelList" component={levelList} />
                  <AppRoute path="/app/level/addLevel" component={addLevel} />
                  {/* My components starts all my app components*/}
                  <AppRoute
                    path="/app/users/user/allUsers"
                    component={allUsers}
                  />
                  <AppRoute
                    path="/app/users/user/addUsers"
                    component={addUsers}
                  />
                  <AppRoute
                    path="/app/users/user/viewUsers/:id"
                    component={viewUsers}
                  />
                  <AppRoute
                    path="/app/roleAndPermission/roleList"
                    component={roleList}
                  />
                  <AppRoute
                    path="/app/roleAndPermission/addRole"
                    component={addRole}
                  />
                  <AppRoute
                    path="/app/roleAndPermission/viewRole"
                    component={viewRole}
                  />
                  {/* <AppRoute path="/app/roleAndPermission" component={rolePermission} /> */}
                  <AppRoute
                    path="/app/notifications/addNotification"
                    component={addNotification}
                  />
                  <AppRoute
                    path="/app/notifications/notification"
                    component={notification}
                  />
                  <AppRoute
                    path="/app/notiteach/notiteachList"
                    component={notiteachList}
                  />
                  <AppRoute
                    path="/app/WithDrowList/WithdrowList"
                    component={WithDrowList}
                  />
                  <AppRoute
                    path="/app/referralCode/ReferralCodeList"
                    component={ReferralCodeList}
                  />
                  //////////////////////// Affilated Program starts
                  ///////////////////////////
                  <AppRoute
                    path="/app/affilateProgram/FirstPhase"
                    component={FirstPhase}
                  />
                  <AppRoute
                    path="/app/affilateProgram/SecondPhase"
                    component={SecondPhase}
                  />
                  ////////////////////// Affilated Program end
                  ///////////////////////
                  <AppRoute
                    path="/app/notiteach/addNotiteach"
                    component={addNotiteach}
                  />
                  <AppRoute
                    path="/app/sellerPayout/pendingPayments/pendingPaymentsList"
                    component={pendingPaymentsList}
                  />
                  <AppRoute
                    path="/app/sellerPayout/pendingPayments/completedPaymentsList"
                    component={completedPaymentsList}
                  />
                  <AppRoute
                    path="/app/sellerPayout/pendingPayments/viewCompletedPaymentsList"
                    component={viewCompletedPaymentsList}
                  />
                  <AppRoute
                    path="/app/subscription/addSubscription"
                    component={addSubscription}
                  />
                  <AppRoute
                    path="/app/subscription/choosePaymentOption"
                    component={choosePaymentOption}
                  />
                  <AppRoute
                    path="/app/subscription/subscriptionList"
                    component={subscriptionList}
                  />
                  <AppRoute
                    path="/app/pageLayout/pageLayout"
                    component={pageLayout}
                  />
                  <AppRoute
                    path="/app/siteSetting/smsSetting"
                    component={smsSetting}
                  />
                  <AppRoute
                    path="/app/siteSetting/emailSetting"
                    component={emailSetting}
                  />
                  <AppRoute
                    path="/app/siteSetting/general"
                    component={general}
                  />
                  <AppRoute
                    path="/app/helpAndSupport/importDemo/ImportDemo"
                    component={importDemo}
                  />
                  <AppRoute
                    path="/app/warehouse/warehouseList"
                    component={warehouseList}
                  />
                  <AppRoute
                    path="/app/warehouse/addWarehouse"
                    component={addWarehouse}
                  />
                  <AppRoute
                    path="/app/warehouse/viewWarehouse/:id"
                    component={viewWarehouse}
                  />
                  <AppRoute
                    path="/app/warehouse/editWarehouse/:id"
                    component={editWarehouse}
                  />
                  <AppRoute
                    path="/app/reason/reasonList"
                    component={reasonList}
                  />
                  <AppRoute
                    path="/app/reason/addReason"
                    component={addReason}
                  />
                  {/* <AppRoute path="/app/reason/editReason/:id" component={editReason} />
          <AppRoute path="/app/reason/viewReason/:id" component={viewReason} />  */}
                  <AppRoute
                    path="/app/transferType/transferTypeList"
                    component={transferTypeList}
                  />
                  <AppRoute
                    path="/app/transferType/addTransferType"
                    component={addTransferType}
                  />
                  <AppRoute
                    path="/app/transferType/editTransferType/:id"
                    component={editTransferType}
                  />
                  <AppRoute
                    path="/app/transferType/viewTransferType/:id"
                    component={viewTransferType}
                  />
                  <AppRoute
                    path="/app/slider/sliderList"
                    component={sliderList}
                  />
                  <AppRoute
                    path="/app/slider/addSlider"
                    component={addSlider}
                  />
                  <AppRoute path="/app/user/list" component={userList} />
                  <AppRoute path="/app/user/edit" component={userEdit} />
                  <AppRoute path="/app/user/view" component={userView} />
                  <AppRoute
                    path="/pages/profile/userProfile"
                    component={userProfile}
                  />
                  <AppRoute
                    path="/app/profile/editProfile"
                    component={editProfile}
                  />
                  <AppRoute
                    path="/pages/reset-password"
                    component={resetPassword}
                    fullLayout
                  />
                </>
              ) : (
                <>
                  <Redirect to="/pages/login" />
                  <AppRoute path="/pages/login" component={Login} fullLayout />
                  <AppRoute
                    path="/pages/forgot-password"
                    component={forgotPassword}
                    fullLayout
                  />
                  <AppRoute
                    path="/misc/error/404"
                    component={error404}
                    fullLayout
                  />
                  <AppRoute
                    path="/pages/register"
                    component={register}
                    fullLayout
                  />
                  <AppRoute
                    path="/misc/error/500"
                    component={error500}
                    fullLayout
                  />
                </>
              )
            }
          />
        </Switch>
      </Router>
    );
  }
}
export default AppRouter;
{
  /* Theme Components Starts from here all the demo components*/
}
{
  /*
          <AppRoute
            path="/pages/lock-screen"
            component={lockScreen}
            fullLayout
          />
           <AppRoute
            path="/email"
            exact
            component={() => <Redirect to="/email/inbox" />}
          />
          <AppRoute path="/email/:filter" component={email} />
          <AppRoute path="/chat" component={chat} />
          <AppRoute
            path="/todo"
            exact
            component={() => <Redirect to="/todo/all" />}
          />
          <AppRoute path="/todo/:filter" component={todo} />
          <AppRoute path="/calendar" component={calendar} />
          <AppRoute path="/ecommerce/shop" component={shop} />
          <AppRoute path="/ecommerce/wishlist" component={wishlist} />
          <AppRoute
            path="/ecommerce/product-detail"
            component={productDetail}
          />
          <AppRoute
            path="/ecommerce/checkout"
            component={checkout}
            permission="admin"
          />
          <AppRoute path="/data-list/list-view" component={listView} />
          <AppRoute path="/data-list/thumb-view" component={thumbView} />
          <AppRoute path="/ui-element/grid" component={grid} />
          <AppRoute path="/ui-element/typography" component={typography} />
          <AppRoute
            path="/ui-element/textutilities"
            component={textutilities}
          />
          <AppRoute
            path="/ui-element/syntaxhighlighter"
            component={syntaxhighlighter}
          />
          <AppRoute path="/colors/colors" component={colors} />
          <AppRoute path="/icons/reactfeather" component={reactfeather} />
          <AppRoute path="/cards/basic" component={basicCards} />
          <AppRoute path="/cards/statistics" component={statisticsCards} />
          <AppRoute path="/cards/analytics" component={analyticsCards} />
          <AppRoute path="/cards/action" component={actionCards} />
          <AppRoute path="/components/alerts" component={Alerts} />
          <AppRoute path="/components/buttons" component={Buttons} />
          <AppRoute path="/components/breadcrumbs" component={Breadcrumbs} />
          <AppRoute path="/components/carousel" component={Carousel} />
          <AppRoute path="/components/collapse" component={Collapse} />
          <AppRoute path="/components/dropdowns" component={Dropdowns} />
          <AppRoute path="/components/list-group" component={ListGroup} />
          <AppRoute path="/components/modals" component={Modals} />
          <AppRoute path="/components/pagination" component={Pagination} />
          <AppRoute path="/components/nav-component" component={NavComponent} />
          <AppRoute path="/components/navbar" component={Navbar} />
          <AppRoute path="/components/tabs-component" component={Tabs} />
          <AppRoute path="/components/pills-component" component={TabPills} />
          <AppRoute path="/components/tooltips" component={Tooltips} />
          <AppRoute path="/components/popovers" component={Popovers} />
          <AppRoute path="/components/badges" component={Badge} />
          <AppRoute path="/components/pill-badges" component={BadgePill} />
          <AppRoute path="/components/progress" component={Progress} />
          <AppRoute path="/components/media-objects" component={Media} />
          <AppRoute path="/components/spinners" component={Spinners} />
          <AppRoute path="/components/toasts" component={Toasts} />
          <AppRoute
            path="/extra-components/auto-complete"
            component={AutoComplete}
          />
          <AppRoute path="/extra-components/avatar" component={avatar} />
          <AppRoute path="/extra-components/chips" component={chips} />
          <AppRoute path="/extra-components/divider" component={divider} />
          <AppRoute path="/forms/wizard" component={vuexyWizard} />
          <AppRoute path="/forms/elements/select" component={select} />
          <AppRoute path="/forms/elements/switch" component={switchComponent} />
          <AppRoute path="/forms/elements/checkbox" component={checkbox} />
          <AppRoute path="/forms/elements/radio" component={radio} />
          <AppRoute path="/forms/elements/input" component={input} />
          <AppRoute path="/forms/elements/input-group" component={group} />
          <AppRoute
            path="/forms/elements/number-input"
            component={numberInput}
          />
          <AppRoute path="/forms/elements/textarea" component={textarea} />
          <AppRoute path="/forms/elements/pickers" component={pickers} />
          <AppRoute path="/forms/elements/input-mask" component={inputMask} />
          <AppRoute path="/forms/layout/form-layout" component={layout} />
          <AppRoute path="/forms/formik" component={formik} />{" "}
          <AppRoute path="/tables/reactstrap" component={tables} />
          <AppRoute path="/tables/react-tables" component={ReactTables} />
          <AppRoute path="/tables/agGrid" component={Aggrid} />
          <AppRoute path="/tables/data-tables" component={DataTable} />
          <AppRoute path="/pages/profile" component={profile} />
          <AppRoute path="/pages/faq" component={faq} />
          <AppRoute
            path="/pages/knowledge-base"
            component={knowledgeBase}
            exact
          />
          <AppRoute
                    path="/extensions/access-control"
                    component={accessControl}
                  />
          <AppRoute
            path="/pages/knowledge-base/category"
            component={knowledgeBaseCategory}
            exact
          />
          <AppRoute
            path="/pages/knowledge-base/category/questions"
            component={knowledgeBaseQuestion}
          />
          <AppRoute path="/pages/search" component={search} />
          <AppRoute
            path="/pages/account-settings"
            component={accountSettings}
          />
          <AppRoute path="/pages/invoice/invoice" component={invoice} />
          <AppRoute
            path="/misc/coming-soon"
            component={comingSoon}
            fullLayout
          /> */
}
{
  /* <AppRoute
            path="/misc/not-authorized"
            component={authorized}
            fullLayout
          />
          <AppRoute
            path="/misc/maintenance"
            component={maintenance}
            fullLayout
          />
          <AppRoute path="/charts/apex" component={apex} />
          <AppRoute path="/charts/chartjs" component={chartjs} />
          <AppRoute path="/charts/recharts" component={extreme} />
          <AppRoute path="/maps/leaflet" component={leafletMaps} />
          <AppRoute path="/extensions/sweet-alert" component={sweetAlert} />
          <AppRoute path="/extensions/toastr" component={toastr} />
          <AppRoute path="/extensions/slider" component={rcSlider} />
          <AppRoute path="/extensions/file-uploader" component={uploader} />
          <AppRoute path="/extensions/wysiwyg-editor" component={editor} />
          <AppRoute path="/extensions/drag-and-drop" component={drop} />
          <AppRoute path="/extensions/tour" component={tour} />
          <AppRoute path="/extensions/clipboard" component={clipboard} />
          <AppRoute path="/extensions/context-menu" component={menu} />
          <AppRoute path="/extensions/swiper" component={swiper} />
         
          <AppRoute path="/extensions/i18n" component={i18n} />
          <AppRoute path="/extensions/tree" component={tree} />
          <AppRoute path="/extensions/import" component={Import} />
          <AppRoute path="/extensions/export" component={Export} />
          <AppRoute
            path="/extensions/export-selected"
            component={ExportSelected}
          />
          <AppRoute path="/extensions/pagination" component={reactPaginate} /> */
}
