/**
 * @oas [get] /admin/regions
 * operationId: GetRegions
 * summary: List Regions
 * description: Retrieve a list of regions. The regions can be filtered by fields
 *   such as `id`. The regions can also be sorted or paginated.
 * x-authenticated: true
 * parameters:
 *   - name: expand
 *     in: query
 *     description: Comma-separated relations that should be expanded in the returned data.
 *     required: false
 *     schema:
 *       type: string
 *       title: expand
 *       description: Comma-separated relations that should be expanded in the returned data.
 *   - name: fields
 *     in: query
 *     description: Comma-separated fields that should be included in the returned
 *       data. if a field is prefixed with `+` it will be added to the default
 *       fields, using `-` will remove it from the default fields. without prefix
 *       it will replace the entire default fields.
 *     required: false
 *     schema:
 *       type: string
 *       title: fields
 *       description: Comma-separated fields that should be included in the returned
 *         data. if a field is prefixed with `+` it will be added to the default
 *         fields, using `-` will remove it from the default fields. without prefix
 *         it will replace the entire default fields.
 *   - name: offset
 *     in: query
 *     description: The number of items to skip when retrieving a list.
 *     required: false
 *     schema:
 *       type: number
 *       title: offset
 *       description: The number of items to skip when retrieving a list.
 *   - name: limit
 *     in: query
 *     description: Limit the number of items returned in the list.
 *     required: false
 *     schema:
 *       type: number
 *       title: limit
 *       description: Limit the number of items returned in the list.
 *   - name: order
 *     in: query
 *     description: The field to sort the data by. By default, the sort order is
 *       ascending. To change the order to descending, prefix the field name with
 *       `-`.
 *     required: false
 *     schema:
 *       type: string
 *       title: order
 *       description: The field to sort the data by. By default, the sort order is
 *         ascending. To change the order to descending, prefix the field name with
 *         `-`.
 *   - name: q
 *     in: query
 *     description: The region's q.
 *     required: false
 *     schema:
 *       type: string
 *       title: q
 *       description: The region's q.
 *   - name: id
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: string
 *           title: id
 *           description: The region's ID.
 *         - type: array
 *           description: The region's ID.
 *           items:
 *             type: string
 *             title: id
 *             description: The id's ID.
 *   - name: code
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: string
 *           title: code
 *           description: The region's code.
 *         - type: array
 *           description: The region's code.
 *           items:
 *             type: string
 *             title: code
 *             description: The code's details.
 *   - name: name
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: string
 *           title: name
 *           description: The region's name.
 *         - type: array
 *           description: The region's name.
 *           items:
 *             type: string
 *             title: name
 *             description: The name's details.
 *   - name: created_at
 *     in: query
 *     description: The region's created at.
 *     required: false
 *     schema:
 *       type: string
 *       description: The region's created at.
 *       required:
 *         - $eq
 *         - $ne
 *         - $in
 *         - $nin
 *         - $like
 *         - $ilike
 *         - $re
 *         - $contains
 *         - $gt
 *         - $gte
 *         - $lt
 *         - $lte
 *       properties:
 *         $eq: {}
 *         $ne: {}
 *         $in: {}
 *         $nin: {}
 *         $like: {}
 *         $ilike: {}
 *         $re: {}
 *         $contains: {}
 *         $gt: {}
 *         $gte: {}
 *         $lt: {}
 *         $lte: {}
 *       title: created_at
 *   - name: updated_at
 *     in: query
 *     description: The region's updated at.
 *     required: false
 *     schema:
 *       type: string
 *       description: The region's updated at.
 *       required:
 *         - $eq
 *         - $ne
 *         - $in
 *         - $nin
 *         - $like
 *         - $ilike
 *         - $re
 *         - $contains
 *         - $gt
 *         - $gte
 *         - $lt
 *         - $lte
 *       properties:
 *         $eq: {}
 *         $ne: {}
 *         $in: {}
 *         $nin: {}
 *         $like: {}
 *         $ilike: {}
 *         $re: {}
 *         $contains: {}
 *         $gt: {}
 *         $gte: {}
 *         $lt: {}
 *         $lte: {}
 *       title: updated_at
 *   - name: deleted_at
 *     in: query
 *     description: The region's deleted at.
 *     required: false
 *     schema:
 *       type: string
 *       description: The region's deleted at.
 *       required:
 *         - $eq
 *         - $ne
 *         - $in
 *         - $nin
 *         - $like
 *         - $ilike
 *         - $re
 *         - $contains
 *         - $gt
 *         - $gte
 *         - $lt
 *         - $lte
 *       properties:
 *         $eq: {}
 *         $ne: {}
 *         $in: {}
 *         $nin: {}
 *         $like: {}
 *         $ilike: {}
 *         $re: {}
 *         $contains: {}
 *         $gt: {}
 *         $gte: {}
 *         $lt: {}
 *         $lte: {}
 *       title: deleted_at
 *   - name: $and
 *     in: query
 *     required: false
 *     schema:
 *       type: array
 *       description: The region's $and.
 *       items:
 *         type: object
 *       title: $and
 *   - name: $or
 *     in: query
 *     required: false
 *     schema:
 *       type: array
 *       description: The region's $or.
 *       items:
 *         type: object
 *       title: $or
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |-
 *       curl '{backend_url}/admin/regions' \
 *       -H 'x-medusa-access-token: {api_token}'
 * tags:
 *   - Regions
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           allOf:
 *             - type: object
 *               description: SUMMARY
 *               required:
 *                 - limit
 *                 - offset
 *                 - count
 *               properties:
 *                 limit:
 *                   type: number
 *                   title: limit
 *                   description: The region's limit.
 *                 offset:
 *                   type: number
 *                   title: offset
 *                   description: The region's offset.
 *                 count:
 *                   type: number
 *                   title: count
 *                   description: The region's count.
 *             - type: object
 *               description: SUMMARY
 *               required:
 *                 - regions
 *               properties:
 *                 regions:
 *                   type: array
 *                   description: The region's regions.
 *                   items:
 *                     $ref: "#/components/schemas/AdminRegion"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 * 
*/

