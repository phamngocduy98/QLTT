<?php
require_once("core/abstract/NodeController.php");
require_once("student/StudentModel.php");



    class My_accountController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {
            // xử lí input
            if (isset($_GET['fields'])){
                $fieldsArr = explode(",",$_GET['fields']);
            }
            $std_id = intval($this->nodeIds[0]);

            // get từ CSDL
            $model = new StudentModel();
            $data = $model->getAccount($fieldsArr, $std_id);

            // res về client
            $this->response('200', $data);
        }
        protected function _PUT() {
            $id = intval($this->nodeIds[0]);
            isset($this->data['password'])?$password = md5(md5($this->data['password'])): null;
            isset($this->data['newPassword'])?$newPassword = md5(md5($this->data['newPassword'])): null;
            $model = new StudentModel();
            $result = $model->updatePassword($id,$password, $newPassword);
            $ret = array(
                "success" => $result,
            );
            $this->response('200', $ret);
        }
        protected function _DELETE() {
            
        }
    }

?>
