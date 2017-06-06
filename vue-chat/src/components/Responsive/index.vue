<template>
<div class='container'>
      <div class='row'>
        <div class='col-lg-4'>
          <h1>demo</h1>
        </div>

        <div class='col-lg-8'>
          <div class='panel panel-default' style='min-width:500px;box-shadow:4px 4px 10px #888888;'>
            <div class="panel-heading">
              <button id='btnCreate'>
                <span class="glyphicon glyphicon-plus"></span>
              </button>
              <span>&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div class="panel-body">
              <div style='float: left;width:100%'>

                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                  Launch demo modal
                </button>

                <!-- Modal -->
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                      </div>
                      <div class="modal-body">
                        ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
	export default{
	  data () {
	    return {
	      checked: true
	    }
	  }
	}
</script>
