module Index.Api.V1.Tests

open FSharp.Control
open System.Net
open TestApi
open Xunit

[<Fact>]
let ``GET /api/v1 should succeed`` () =
  task {
    let api = Dependencies.Server.CreateClient()
    let! response = api.GetAsync("/api/v1")
    Assert.True(response.IsSuccessStatusCode)
  }

[<Fact>]
let ``GET /api/v1/ should succeed`` () =
  task {
    let api = Dependencies.Server.CreateClient()
    let! response = api.GetAsync("/api/v1/")
    Assert.True(response.IsSuccessStatusCode)
  }

[<Fact>]
let ``GET /api/v1/asd should return 401`` () =
  task {
    let api = Dependencies.Server.CreateClient()
    let! response = api.GetAsync("/api/v1/asd")
    Assert.Equal(HttpStatusCode.NotFound, response.StatusCode)
  }