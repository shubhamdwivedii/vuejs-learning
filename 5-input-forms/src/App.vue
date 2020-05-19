<template>
  <div class="container">
    <form>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <h1>File a Complaint</h1>
          <hr />
           
          <div class="form-group">
            <label for="email">Mail</label>
            <!-- use v-model to add two way binding --> 
            <input type="text" v-model="userData.email" id="email" class="form-control" />
            <!-- we can also bind to a property inside and object in our data property -->
            {{ userData.email }} <!-- will be updated as soon as user starts typing -->
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <!-- v-model.lazy modifier will only updated value in binded data property when we shift focus away from it. eg. clicking on a button, or a different input field. -->
            <input type="password" v-model.lazy="userData.password" id="password" class="form-control" />  
            {{ userData.password }} <!-- will be updated only when user shifts away focus -->
          </div>

          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" v-model.number="userData.age" id="age" class="form-control" />
            <!-- v-model.number modifier will force the input to be a number -->
            <!-- modifiers can be chained too, v-model.lazy.number="something" -->
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="message">Message</label><br />
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea id="message" v-model="message" rows="5" class="form-control"></textarea>
          <!-- User v-model to add default (placeholder) text instead -->
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <div class="form-group">
            <label for="sendmail">
              <input type="checkbox" id="sendmail" value="SendMail" /> Send Mail
            </label>
            <label for="sendInfomail">
              <input type="checkbox" id="sendInfomail" value="SendInfoMail" />
              Send Infomail
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="male">
            <input type="radio" id="male" value="Male" /> Male
          </label>
          <label for="female">
            <input type="radio" id="female" value="Female" /> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group"
        >
          <label for="priority">Priority</label>
          <select id="priority" class="form-control">
            <option></option>
          </select>
        </div>
      </div>
      <hr />
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <button class="btn btn-primary">Submit!</button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age: {{ userData.age }}</p>
            <p style="white-space: pre">Message: {{ message }}</p>
            <!-- white-space: pre is css style that will keep the multilines info -->
            
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li></li>
            </ul>
            <p>Gender:</p>
            <p>Priority:</p>
            <p>Switched:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: { // we can group data like this
        email: '', // will be connected using v-model
        password: '', 
        age: 25,
      },
      message: "A Short Message"
    }
  }
};
</script>

<style></style>
