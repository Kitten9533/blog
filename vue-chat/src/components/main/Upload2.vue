<template>
	<accordion :one-at-atime="checked" type="info">
	  <panel is-open type="primary">
	    <strong slot="header"><u>Panel #1</u></strong>
	    ...
	  </panel>
	  <panel header="Panel #2">
	    ...
	  </panel>
	  <panel header="Panel #3">
	    ...
	  </panel>
	  <panel header="Panel #4">
	    ...
	  </panel>
	</accordion>
</template>
