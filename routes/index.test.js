var app = require("../app")
var request = require("supertest")

test("Sign Up - Body correct", async (done) => {
 await request(app).post('/signUp')
   .send({ usernameFromFront: "Sybil", emailFromFront: "sybil@sybil", passwordFromFront:'1234', paletteFromStore:'03848282482' })
   .expect(200)
   .expect({ result: true, error:[]});
 done();
});



test("Sign Up - Body incomplet", async (done) => {
  await request(app).post('/signUp')
    .send({ usernameFromFront: "", emailFromFront: "sybil@sybil", paspasswordFromFront:'1234', paletteFromStore:'03848282482' })
    .expect(200)
    .expect({ result: false, error:["Champs vides"] });
  done();
 });

 test("Sign Up - Pas de Palette", async (done) => {
  await request(app).post('/signUp')
    .send({ usernameFromFront: "Sybil", emailFromFront: "sybil@sybil", paspasswordFromFront:'1234', paletteFromStore:'undefined' })
    .expect(200)
    .expect({ result: false, error:["Répondez au questionnaire avant de vous inscrire"] });
  done();
 });

 
 test("Sign In - Body correct", async (done) => {
  await request(app).post('/signIn')
    .send({ emailFromFront: "sybil@sybil", paspasswordFromFront:'1234' })
    .expect(200)
    .expect({ result: true, emailFromFront: "sybil@sybil", paspasswordFromFront:'1234' });
  done();
 });

 test("Sign In - Body incorrect", async (done) => {
  await request(app).post('/signIn')
    .send({ emailFromFront: "", paspasswordFromFront:'1234'})
    .expect(200)
    .expect({ result:false});
  done();
 });
 

