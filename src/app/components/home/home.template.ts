export default `
<div class="row home-news-card" ng-repeat="data in [1,2,3,4,5]">
    <div class="col-sm-12">
        <div class="card atm-card">
            <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">{{ data }}</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    </div>
</div>
`;