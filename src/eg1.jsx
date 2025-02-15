import { useSelector } from "react-redux"


function Reduxrg() {

  const value = useSelector(state=>state.counter.value)
  return (
    <div>{value}
    <div class="container">
    <div class="divTable div-hover">
        
            <div class="rowTable bg-primary text-white pb-2">
                <div class="divTableCol">Product</div>
                <div class="divTableCol">Authorized</div>
                <div class="divTableCol">Quantity</div>
                <div class="divTableCol">Price</div>
                <div class="divTableCol">Total</div>
                <div class="divTableCol">Actions</div>
            </div>
        
        
            <div class="rowTable">
                <div class="divTableCol">
                    <div class="media">
       
                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">Hotel</a></h4>
                            <h5 class="media-heading">via Catalfini, Roma <a href="#">Noto Hotel </a></h5>
                            <span>Status: </span><span class="text-warning"><strong>Pending request</strong></span>
                        </div>
                    </div>
                </div>
                <div class="divTableCol"><strong class="label label-warning">Pending</strong></div>
                <div class="divTableCol">
                    <input type="email" class="form-control" id="exampleInputEmail1" value="3" />
                </div>
                <div class="divTableCol"><strong>€56.67</strong></div>
                <div class="divTableCol"><strong>€170.01</strong></div>
                <div class="divTableCol">
                    <button type="button" class="btn btn-danger"><span class="fa fa-remove"></span> Remove</button>
                </div>
            </div>
            <div class="rowTable">
                <div class="divTableCol">
                    <div class="media">
                        <a class="thumbnail pull-left mr-2" href="#">
                            <img class="media-object" src="https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/28859.png" style="width: 72px; height: 72px;" />
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">Auto</a></h4>
                            <h5 class="media-heading">by <a href="#">Hertz</a></h5>
                            <span>Status: </span><span class="text-success"><strong>Lorem ipsum in 2 - 3 weeks</strong></span>
                        </div>
                    </div>
                </div>
                <div class="divTableCol"><strong class="label label-success">Authorized</strong></div>
                <div class="divTableCol">
                    <input type="email" class="form-control" id="exampleInputEmail1" value="2" />
                </div>
                <div class="divTableCol"><strong>€50.00</strong></div>
                <div class="divTableCol"><strong>€100.00</strong></div>
                <div class="divTableCol">
                    <button type="button" class="btn btn-danger"><span class="fa fa-remove"></span> Remove</button>
                </div>
            </div>
            <div class="rowTable">
                <div class="divTableCol">
                    <div class="media">
                        <a class="thumbnail pull-left mr-2" href="#">
                            <img class="media-object" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFLUKa1_4ANg6LBvqpz_zcCnjzVFxXk0JlSgzJnp8W9uqL0VioOGUWfw" style="width: 72px; height: 72px;" />
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">Flight</a></h4>
                            <h5 class="media-heading">by <a href="#">Alitalia</a></h5>
                            <span>Status: </span><span class="text-success"><strong>Lorem ipsum in 2 - 3 weeks</strong></span>
                        </div>
                    </div>
                </div>
                <div class="divTableCol"><strong class="label label-success">Authorized</strong></div>
                <div class="divTableCol">
                    <input type="email" class="form-control" id="exampleInputEmail1" value="2" />
                </div>
                <div class="divTableCol"><strong>€150.00</strong></div>
                <div class="divTableCol"><strong>€300.00</strong></div>
                <div class="divTableCol">
                    <button type="button" class="btn btn-danger"><span class="fa fa-remove"></span> Remove</button>
                </div>
            </div>
            <div class="rowTable">
                <div class="divTableCol"></div>
                <div class="divTableCol"></div>
                <div class="divTableCol"></div>
                <div class="divTableCol"><h5>Subtotal</h5></div>
                <div class="divTableCol">
                    <h5><strong>€570.00</strong></h5>
                </div>
            </div>
            <div class="rowTable">
                <div class="divTableCol"></div>
                <div class="divTableCol"></div>
                <div class="divTableCol"></div>
                <div class="divTableCol"><h5>Prezzo totale</h5></div>
                <div class="divTableCol">
                    <h5><strong>€570.00</strong></h5>
                </div>
            </div>
            <div class="rowTable">
                <div class="divTableCol"></div>
                <div class="divTableCol"></div>
                <div class="divTableCol"></div>
                <div class="divTableCol"><h3>Total</h3></div>
                <div class="divTableCol">
                    <h3><strong>€570.00</strong></h3>
                </div>
            </div>
            <div class="rowTable">
                <div class="divTableCol"></div>
                <div class="divTableCol"></div>
                <div class="divTableCol"></div>
                <div class="divTableCol">
                    <button type="button" class="btn btn-default col-6"></span> Torna indietro </button>
                </div>
                <div class="divTableCol">
                    <button type="button" class="btn btn-success">Salva la pratica</span></button>
                </div>
            </div>        
    </div>
</div>
    
    </div>
  )
}

export default Reduxrg