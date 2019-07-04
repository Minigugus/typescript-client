module.exports = (nock, host) => {
  nock(host)
    .persist()
    .get('/api/blocks')
    .reply(200, { data: [] })
    .get('/api/blocks/get')
    .query({ id: 123 })
    .reply(200, { data: [] })
    .get('/api/blocks/getEpoch')
    .reply(200, { data: [] })
    .get('/api/blocks/getFee')
    .reply(200, { data: [] })
    .get('/api/blocks/getFees')
    .reply(200, { data: [] })
    .get('/api/blocks/getHeight')
    .reply(200, { data: [] })
    .get('/api/blocks/getMilestone')
    .reply(200, { data: [] })
    .get('/api/blocks/getNethash')
    .reply(200, { data: [] })
    .get('/api/blocks/getReward')
    .reply(200, { data: [] })
    .get('/api/blocks/getStatus')
    .reply(200, { data: [] })
    .get('/api/blocks/getSupply')
    .reply(200, { data: [] })
}
