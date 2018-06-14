<?php
require_once("/core/abstract/NodeController.php");
require_once("/lecturer/LecturerModel.php");



    class LecturerController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {

            // get từ CSDL
            $model = new LecturerModel();
            $data = $model->getLecturerList(50);

            // res về client
            $this->response('200', $data);
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>